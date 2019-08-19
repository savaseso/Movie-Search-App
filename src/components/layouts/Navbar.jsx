import React from 'react'
import { Link } from 'react-router-dom'
const Navbar  = (props) => {
return(
    <nav className = "navbar navbar-dark bg-dark mb-5">
        <Link to='/' className="navbar-brand mb-00 h1 mx-auto">
            MovieFinder
        </Link>
        <p className='navbar-brand'>Sign in/Log in</p>
    </nav>
    )
}
export default Navbar;