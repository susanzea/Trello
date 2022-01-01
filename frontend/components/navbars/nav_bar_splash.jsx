import React from 'react';
import { Link } from 'react-router-dom';

class NavBarSplash extends React.Component {

    render() {
        return(
            <nav>
                <Link to={`/signup`}>Sign up</Link>
                <Link to={`/login`}>Log in</Link>
            </nav>
        )
    }
}

export default NavBarSplash;