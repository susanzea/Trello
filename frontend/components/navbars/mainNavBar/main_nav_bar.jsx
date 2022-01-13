import React from 'react';
import { Link } from 'react-router-dom';
import LogoHomeButton  from './logo_home_button'
import SearchBar  from './search_bar'
import UserMenu from './user_menu';
import PersonalLinks from './personal_links';

class MainNavBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        // debugger
        return (
            <nav id='main-nav-bar'>
                <div id="main-nav-left">
                    <LogoHomeButton />
                    <PersonalLinks />
                </div>
                <div id="main-nav-right">
                    <SearchBar />
                    <UserMenu currentUser={this.props.currentUser} />
                    <button id="logout-button" onClick={this.props.logout}>Logout</button>
                </div>
            </nav>
        )
    }
}

export default MainNavBar;