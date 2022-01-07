import React from 'react';
import { Link } from 'react-router-dom';
import AtlassianLogo  from './atlassian_logo'
import LogoHomeButton  from './logo_home_button'
import SearchBar  from './search_bar'
import UserMenu from './user_menu';

class MainNavBar extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    // handleLogout(e) {
    //     e.preventDefault();
    //     this.props.logout()
    //     .then(user => {
    //         this.props.history.push("/login")
    //     })
    // }


    render(){
        debugger
        const loggedInBar = () => (
            <nav className='top-nav-bar' id='main-nav-bar'>
                <AtlassianLogo />
                <LogoHomeButton />
                <SearchBar />
                <UserMenu />
                <Link to="/login" onClick={this.props.logout}>Logout</Link>
            </nav>
        )
            //issue
        console.log(this.props)

        return this.props.currentUser ? loggedInBar() : null;
    
    }
}

export default MainNavBar;