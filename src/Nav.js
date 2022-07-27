import React from 'react'
import { Link } from 'react-router-dom';
// import './Nav.css'
const Nav = ({searchValue, handleChange, resetSearch}) => {
  const allCategories = ['All', 'Business', 'Opinion', 'US', 'World']
  const allButtons = allCategories.map(category => {
    return (
      <div>
        <input name='category' type='radio' value={category} onClick={(event) => {handleChange(event)}}/>
        <label for={category}>{category}</label>
      </div>
      
    )
  })
  return (
    <nav>
      <div className='nav'>
        <h1 className='title'>NY-Times-Reader</h1>
          {allButtons}
      </div>
    </nav>
  )
}
export default Nav