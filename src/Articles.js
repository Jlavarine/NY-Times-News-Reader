import React from 'react'
import './Articles.css'
import { Link } from 'react-router-dom'
const Articles = ({id, title}) => {
    return (
        <div className='cards'>
            <div className='card-title'>
                <h2>{title}</h2>
            </div>
            <hr></hr>
            <Link to={`/details/${title}`}><button>Show More</button></Link>
        </div>
    )
}
export default Articles