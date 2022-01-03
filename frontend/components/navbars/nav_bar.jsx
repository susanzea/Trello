import React from 'react';
import { Link} from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {

    const loggedInLinks = () => {
    return <nav className='loggedInNav'>
        <img src="/images/navbar/trelloh-logo.png" alt="" className='logo'/>
        <h2>Trelloh</h2>
        <Link to="/" onClick={logout}>Logout</Link>
    </nav>
    }

    const loggedOutLinks = () => {
        return <nav className='loggedOutNav'>
            <img src="/images/navbar/trelloh-logo.png" alt="" className='logo' />
            <h2>Trelloh</h2>
            <Link to={`/login`}>Log in</Link>
            <Link to={`/signup`} className='splash-button'>Sign up</Link>
        </nav>
    }
    return(
        currentUser ? loggedInLinks() : loggedOutLinks()
    )
}

export default NavBar;