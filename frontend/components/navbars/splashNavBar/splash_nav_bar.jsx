import React from 'react';
import { Link } from 'react-router-dom';

class SplashNavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className='splash-nav-bar'>
                <img src="/images/navbar/trelloh-logo.png" alt="" className='logo' />
                <h2>Trelloh</h2>
                <Link to={`/login`}>Log in</Link>
                <Link to={`/signup`} className='splash-button'>Sign up</Link>
            </nav>
        )
    }
}