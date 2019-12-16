import React from 'react'
import { Link } from 'react-router-dom'
const Navbar  = (props) => {
return(
    <nav className = "navbar navbar-dark bg-dark mb-5">
        <Link to='/' className="navbar-brand mb-00 h1 mx-auto">
            MovieFinder
        </Link>
    </nav>
    )
}
export default Navbar;