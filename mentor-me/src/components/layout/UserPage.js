import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
// import 

const UserPage = (props) => {

    const signout = () =>{
        localStorage.setItem('token','notoken')
        

        // axios.setHeader('Authorization',null);
        // window.location.reload()
        props.history.push('/')
        
    }

    return (
        
            <ul className='right'>
                <li><NavLink to='/create'>Ask Question</NavLink></li>
                <li><a onClick={signout}>Log out</a></li>
                
    
            </ul>
    )
}
export default UserPage