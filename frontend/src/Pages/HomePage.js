import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function HomePage() {

    const {loading, data, error} = useFetch("http://localhost:1337/reviews")

    if (loading) return <p>Loading...</p>
    if (error) return <p>error...</p>

    return (
        <div>
            {data.map(review=>(
                
                <ReviewCard key={review.id} className="review-card">
                    <div className="rating">{review.rating}</div>
                        
                    <h2>{review.title}</h2>
                    <small>console list</small>
                    <p className="review-body">
                        {review.body.substring(0, 200)}...
                    </p>
                    <Link to={`/details/${review.id}`}>Read More</Link>
                
                </ReviewCard>
            ))}
        </div>
    )
}


const ReviewCard = styled.div`
    background: white;
    margin: 60px auto;
    padding: 1px 20px 20px 90px;
    position: relative;
    .rating {
        position: absolute;
        top: -20px;
        left: -20px;
        background: #8e2ad6;
        font-size: 3em;
        width: 90px;
        height: 90px;
        text-align: center;
        color: white;
    }

    h2 {
        margin-bottom: 0;
    }

    small {
        margin-right: 10px;
        color: #777;
    }
`


