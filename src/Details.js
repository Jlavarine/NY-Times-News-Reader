import React from "react";
import { Link } from "react-router-dom";
import './Details.css'
const Details = ({foundArticle}) => {
    return (
        <div className="details-view">
            <h2 className="details-title">{foundArticle.title}</h2>
            <p className="details-abstract">{foundArticle.abstract}</p>
            <p className="details-byline">{foundArticle.byline}</p>
            <a className="details-link" style={{textDecoration: 'none', color: 'blue'}}href={foundArticle.url} target='_blank'>View on NY Times Website</a><br></br>
            <Link to='/'><button className="details-homepage-button">Homepage</button></Link>
        </div>
    )
}
export default Details