import React from 'react'
import './Articles.css'
import { Link } from 'react-router-dom'
const Articles = ({id, title, article}) => {
    console.log(article.title)
    return (
        <div className='cards'>
            {article.multimedia ? <img className='article-image' alt={article.multimedia[0].caption}src={article.multimedia[0].url}/> : <img className='article-image' alt='clipart of newspaper' src='https://cdn-icons-png.flaticon.com/512/81/81460.png' />}
            <div className='card-title'>
                <h2>{title}</h2>
                <hr></hr>
                <Link to={`/details/${title}`}><button>Show More</button></Link>
            </div>
        </div>
    )
}
export default Articles