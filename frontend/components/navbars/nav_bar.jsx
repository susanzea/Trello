import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const loggedInLinks = () => {
    return <nav>
        <button onClick={logout}>Log out</button>
    </nav>
    }

    const loggedOutLinks = () => {
        return <nav>
            <Link to={`/login`}>Log in</Link>
            <Link to={`/signup`}>Sign up</Link>
        </nav>
    }
    debugger
    return(
        currentUser ? loggedInLinks() : loggedOutLinks()
    )
}

export default NavBar;