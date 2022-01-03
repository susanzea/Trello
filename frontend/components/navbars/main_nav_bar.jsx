import React from 'react';

class MainNavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <nav>
                <AtlassianLogo />
                <LogoHomeButton />
                <SearchBar />
                <button>Bell</button>
                <NotificationMenu />
                <UserMenu />
            </nav>
        )
    }
}