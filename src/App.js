import React, { useState, useEffect} from 'react'
import { fetchArticles } from './apiCalls'
import Container from './Container'
import Details from './Details'
import Nav from './Nav'
import NoPageFound from './NoPageFound'
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
const App = () => {
  const [articles, setArticles] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filteredArticles, setFilteredArticles] = useState([])

  useEffect(() => {
    fetchArticles()
    .then(data => {
      console.log(data.results)
      setArticles(data.results)
    })
  },[])

  useEffect(() => {
    if(searchValue === 'all') {
      setSearchValue('')
    } else {
      const matchingArticles = articles.filter(article =>  article.section === `${searchValue}`)
      setFilteredArticles(matchingArticles)
    }
  },[searchValue])

  const handleChange = (event) => {
    setSearchValue(event.target.value.toLowerCase())
  }

  return (
    <Switch>
      <Route exact path='/'>
      <div>
        <Nav handleChange={handleChange}/>
        {searchValue ? <Container articles={filteredArticles}/> : <Container articles={articles} />}
      </div>
    </Route>
    <Route path='/details/:id' render={({match}) => {
      const foundArticle = articles.find(article => {
        const articleId = article.uri.split('/').pop()
        return(
          articleId === match.params.id
        )
      })
      return (
        <div>
          <h1>NY Times Reader</h1>
          <Details foundArticle={foundArticle} />
        </div>
      )
    }} />
    <Route path='*'>
      <NoPageFound />
    </Route>
    </Switch>
  )
}
export default App