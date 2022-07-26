import React from 'react'
import { Link } from 'react-router-dom';
// import './Nav.css'
const Nav = ({searchValue, handleChange, resetSearch}) => {
  return (
    <nav>
      <div className='nav'>
        <h1 className='title'>NY-Times-Reader</h1>
        <label for='topics'>Filter by topic:</label>
        <select name='topics' onChange={(event) => {
            handleChange(event)
          }}>
          <option value='politics'>Politics</option>
          <option value='science'>Science</option>
          <option value='technology'>Technology</option>
          <option value='world'>World</option>
          <option value='us'>US</option>
          <option value='opinion'>Opinion</option>
          <option value='business'>Business</option>
        </select>
      </div>
    </nav>
  )
}
export default Nav