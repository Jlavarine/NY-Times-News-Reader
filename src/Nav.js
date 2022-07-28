import React from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css'
const Nav = ({handleChange}) => {
  const allCategories = ['All', 'Business', 'Opinion', 'US', 'World']
  const allButtons = allCategories.map(category => {
    return (
      <div key={`${category}-button`}>
        <label htmlFor={category}>{category}</label>
        <input id={category} name='category' type='radio' value={category} onClick={(event) => {handleChange(event)}}/>
      </div>
      
    )
  })
  return (
    <nav>
      <div className='nav'>
        <NavLink to='/' style={{textDecoration: 'none', color: 'black'}}><h1 className='title'>NY-Times Reader</h1></NavLink>
        <div className='filter-options'>
          {allButtons}
        </div>
      </div>
    </nav>
  )
}
export default Nav