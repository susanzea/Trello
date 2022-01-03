import React from 'react';
import { Link } from 'react-router-dom';

const SplashNavBar = () => {
    return (
        <nav className='top-nav-bar' id='splash-nav-bar'>
            <img src="/images/navbar/trelloh-logo.png" alt="" className='logo' />
            <h2>Trelloh</h2>
            <Link to={`/login`}>Log in</Link>
            <Link to={`/signup`} className='splash-button'>Sign up</Link>
        </nav>
    )
}

export default SplashNavBar;