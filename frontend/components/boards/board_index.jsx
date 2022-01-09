import React from 'react';
import MainNavBarContainer from '../navbars/mainNavBar/main_nav_bar_container';

class BoardIndex extends React.Component {

    render() {
        //get ownProps to MainNavContainer
        return (
            <div>
                <MainNavBarContainer />
                <h1>Boards Index</h1>
            </div>
        )
    }
}

export default BoardIndex;