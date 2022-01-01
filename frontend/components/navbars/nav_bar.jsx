import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {


        return(
            <nav>
                <Link to={`/signup`}>Sign up</Link>
                <Link to={`/login`}>Log in</Link>
            </nav>
        )
}

export default NavBar;