import React from "react";
import { Link } from "react-router-dom";
const Details = ({foundArticle}) => {
    return (
        <div style={{backgroundImage: `url(${foundArticle.multimedia[0].url})`}}>
            <h2>{foundArticle.title}</h2>
            <p>{foundArticle.abstract}</p>
            <p>{foundArticle.byline}</p>
            <Link to='/'><button>Homepage</button></Link>
        </div>
    )
}
export default Details