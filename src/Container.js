import React from "react";
import Articles from "./Articles";
import './Container.css'
const Container = ({articles}) => {
    let id = 0
    const allArticles = articles.map(article => {
        id+= 1
        return (
            <Articles
                id={id}
                key={id}
                title={article.title}
            />
        )
    })
    return (
        <div className="articles-container">
            {allArticles}
        </div>
    )
}
export default Container