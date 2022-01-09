import React from 'react';
import { Link } from 'react-router-dom';
import AtlassianLogo  from './atlassian_logo'
import LogoHomeButton  from './logo_home_button'
import SearchBar  from './search_bar'
import UserMenu from './user_menu';

class MainNavBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        // debugger
        return (
            <nav className='top-nav-bar' id='main-nav-bar'>
                <AtlassianLogo />
                <LogoHomeButton />
                <SearchBar />
                <UserMenu />
                <Link to="/login" onClick={this.props.logout}>Logout</Link>
            </nav>
        )
    }
}

export default MainNavBar;