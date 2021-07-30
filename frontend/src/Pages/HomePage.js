import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'


    const REVIEWS = gql`
        query getReviews{
            reviews{
                title,
                body,
                rating,
                id,
                categories{
                    name,
                    id
                }
            }
        }
    `


export default function HomePage() {

    const { loading, error, data } = useQuery(REVIEWS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>error...</p>

    return (
        <div>
            {data.reviews.map(review=>(
                
                <div key={review.id} className="review-card">
                    <div className="rating">{review.rating}</div>
                        
                    <h2>{review.title}</h2>
                    {review.categories.map(c=>(
                        <small key={c.id}>{c.name}</small>
                    ))}
                    <p className="review-body">
                        {review.body.substring(0, 200)}...
                    </p>
                    <Link to={`/details/${review.id}`}>Read More</Link>
                
                </div>
            ))}
        </div>
    )
}




