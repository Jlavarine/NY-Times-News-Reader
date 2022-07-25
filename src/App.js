import React, { useState, useEffect} from 'react'
import { fetchArticles } from './apiCalls'
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
    <div>
      <h1>Hello</h1>
    </div>
  )
}
export default App