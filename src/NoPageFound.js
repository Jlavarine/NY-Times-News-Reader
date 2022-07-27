import React from 'react'
import { Link } from 'react-router-dom';
import './NoPageFound.css'

const NoPageFound = () => {
    return (
        <div className='fof-box'>
            <h1 className='fof-header'>Our editor hasn't finished completing that story...</h1>
            <img className='fof-image' src='https://i.gifer.com/1F6.gif'></img>
            <p className='fof-return-text'>Click <Link to='/' style={{textDecoration: 'none', color: 'blue'}}>here</Link> to return to the main page.</p>
        </div>
    )
}
export default NoPageFound;