import React from 'react';
import MainNavBarContainer from '../navbars/mainNavBar/main_nav_bar_container';

class WorkspaceBoardsIndex extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        debugger
        //get ownProps to MainNavContainer
        return (
            <div>
                <MainNavBarContainer />
                <h1>Workspace Boards Index</h1>
            </div>
        )
    }
}

export default WorkspaceBoardsIndex;