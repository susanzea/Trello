import React from 'react';
import { Link } from 'react-router-dom';

const LogoHomeButton = (props) => {
    // TODO: clicking on home button should fetch boards for first workspace
    debugger

    return (
        <Link id='main-logo' to={`/home`}>
            <img src={window.trelloh_logo_main_url} alt="Trelloh logo" className='logo-main' />
            <p>Trelloh</p>
        </Link>
    )
}

export default LogoHomeButton;

