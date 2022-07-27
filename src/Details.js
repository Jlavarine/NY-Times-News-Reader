import React from "react";
import { Link } from "react-router-dom";
const Details = ({foundArticle}) => {
    return (
        <div>
            <h2>{foundArticle.title}</h2>
            <p>{foundArticle.abstract}</p>
            <p>{foundArticle.byline}</p>
            <Link to='/'><button>Homepage</button></Link>
        </div>
    )
}
export default Details