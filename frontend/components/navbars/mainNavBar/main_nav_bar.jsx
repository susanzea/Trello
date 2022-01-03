import React from 'react';
import { Link } from 'react-router-dom';
import AtlassianLogo  from './atlassian_logo'
import LogoHomeButton  from './logo_home_button'
import SearchBar  from './search_bar'
import NotificationMenu from './notification_menu';
import UserMenu from './user_menu';
import { logout } from '../../../actions/session_actions'

class MainNavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <nav className='main-nav-bar'>
                <AtlassianLogo />
                <LogoHomeButton />
                <SearchBar />
                <button>ℹ️</button>
                <NotificationMenu />
                <UserMenu />
                <Link to="/" onClick={logout}>Logout</Link>
            </nav>
        )
    }
}

export default MainNavBar;