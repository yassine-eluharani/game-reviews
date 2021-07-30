import React from 'react'
import { useParams } from 'react-router'
import { gql, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'


const REVIEW = gql`
        query getReview($id: ID!){
            review(id: $id) {
                title,
                rating,
                body,
                id,
                categories{
                    name,
                    id
                }
            }
        }
    `

export default function ReviewDetails() {
    const { id } = useParams()
    const { loading, error, data } = useQuery(REVIEW,{
        variables : {
            id : id
        }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>error...</p>

    return (
        <div>
            <div key={data.review.id} className="review-card">
                <div className="rating">{data.review.rating}</div>

                <h2>{data.review.title}</h2>
                {data.review.categories.map(c=>(
                        <small key={c.id}>{c.name}</small>
                    ))}
                <p className="review-body">
                    {data.review.body}
                </p>
                <Link to='/'>Back </Link>

            </div>
        </div>
    )
}
