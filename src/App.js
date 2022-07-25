import React, { useState, useEffect} from 'react'
import { fetchArticles } from './apiCalls'
import Container from './Container'
import Details from './Details'
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
const App = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles()
    .then(data => {
      console.log(data.results)
      setArticles(data.results)
    })
  },[])

  return (
    <Switch>
      <Route exact path='/'>
      <div>
        <div className='title-box'>
          <h1 className='title'>NY Times Reader</h1>
        </div>
        <Container articles={articles}/>
      </div>
    </Route>
    <Route path='/details/:title' render={({match}) => {
      const foundArticle = articles.find(article => {
        return(
          article.title === match.params.title
        )
      })
      return (
        <div>
          <h1>NY Times Reader</h1>
          <Details foundArticle={foundArticle} />
        </div>
      )
    }} />
    </Switch>
  )
}
export default App