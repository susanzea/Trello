import React from 'react';
import { Link } from 'react-router-dom';

const LogoHomeButton = () => {
    return (
        <Link id='main-logo' to={`/home`}>
            <img src={window.trelloh_logo_main_url} alt="Trelloh logo" className='logo-main' />
            <p>Trelloh</p>
        </Link>
    )
}

export default LogoHomeButton;

