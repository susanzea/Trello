import React from 'react';
import { Link } from 'react-router-dom';

class SplashNavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <TrellohLogo />
                <TrellohHeader />
                <Link to={`/login`}>Log in</Link>
                <Link to={`/signup`} className='splash-button'>Sign up</Link>
            </nav>
        )
    }
}