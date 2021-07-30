import { useQuery, gql } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'

const CATEGORIES = gql`
    query getCategories{
        categories{
            name,
            id
        }
    }
`

export default function SiteHeader(){
    const { loading, error, data } = useQuery(CATEGORIES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>error...</p>

    return(
        <div className="site-header">
            <Link to = "/" ><h1>Game reviews</h1></Link>
            <nav className="categories">
                <span>Filter Reviews by categories</span>
                {data.categories.map(category => (
                    <Link key={category.id} to={`/category/${category.id}`}>
                        {category.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}
