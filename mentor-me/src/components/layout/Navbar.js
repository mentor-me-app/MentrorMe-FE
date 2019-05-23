import React from 'react'
import FrontPage from './FrontPage'
import UserPage from './UserPage'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { searchQuestion } from '../../actions'


const Navbar = (props) => {

    const page = props.inUserPage ? <UserPage /> : <FrontPage />

    return (
        <nav className='nav-wrapper grey darken-3'>
        {/* <nav className='nav-wrapper #2B2F3B'> */}
            <div className='container'>
                <Link to='/' className='brand-logo'>
                    Mentor Me
                    </Link>
                {page}
            </div>
        </nav>
    )
}


const mapStateToProps = state => ({
    inUserPage: state.inUserPage,
})

export default withRouter(connect(
    mapStateToProps
)(Navbar))

// export default Navbar