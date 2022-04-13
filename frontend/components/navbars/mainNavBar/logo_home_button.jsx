import React from 'react';
import { Link } from 'react-router-dom';

const LogoHomeButton = (props) => {
    // TODO: clicking on home button should fetch boards for first workspace
    // thinking I'll need to use useState and useEffect to store fetched workspaceId in component bc it won't be loaded into state

    return (
        <Link id='main-logo' to={`/home`}>
            <img src={window.trelloh_logo_main_url} alt="Trelloh logo" className='logo-main' />
            <p>Trelloh</p>
        </Link>
    )
}

export default LogoHomeButton;

