import React from 'react'
import { NavLink } from 'react-router-dom'

const FrontPage = () => {
    return (
        <ul className='right'>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/signin'>Sign In </NavLink></li>


        </ul>
    )
}
export default FrontPage