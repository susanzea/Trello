import React from 'react';
import MainNavBarContainer from '../navbars/mainNavBar/main_nav_bar_container';

class WorkspaceBoardsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger //being hit
        this.props.fetchAllWorkspaceBoards(this.props.workspaceId)
    }


    render() {
        return (
            <div>
                <MainNavBarContainer />
                <h1>Workspace Boards Index</h1>
            </div>
        )
    }
}

export default WorkspaceBoardsIndex;