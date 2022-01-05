import React from 'react';
import { Link } from 'react-router-dom';

const SplashNavBar = () => {
    return (
        <nav className='top-nav-bar' id='splash-nav-bar'>
            <div className='site-logo'>
                <img src={window.trelloh_logo_url} alt="" className='logo' />
                <h2 id='site-title'>Trelloh</h2>
            </div>
            <div className='session-links'>
                <Link to={`/login`} id="splash-login-button">Log in</Link>
                <Link to={`/signup`} id="splash-signup">Sign up</Link>
            </div>
        </nav>
    )
}

export default SplashNavBar;