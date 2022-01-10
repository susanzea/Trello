import React from 'react';
import { Link } from 'react-router-dom';
import LogoHomeButton  from './logo_home_button'
import SearchBar  from './search_bar'
import UserMenu from './user_menu';

class MainNavBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        return (
            <nav id='main-nav-bar'>
                <LogoHomeButton />
                <div id="">
                    <SearchBar />
                    <UserMenu currentUser={this.props.currentUser} />
                    <Link id="logout-button" to="/login" onClick={this.props.logout}>Logout</Link>
                </div>
            </nav>
        )
    }
}

export default MainNavBar;