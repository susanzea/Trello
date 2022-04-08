import React from 'react';
import MainNavBarContainer from '../../navbars/mainNavBar/main_nav_bar_container';
import NoBoardsIndex from './no_boards_index';
import BoardsIndex from './boards_index';


class WorkspaceBoardsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            workspace_id: this.props.workspaceId
        }
    }

    componentDidMount() {
        this.props.fetchUserWorkspace(this.props.workspaceId);
        this.props.fetchAllWorkspaceBoards(this.props.workspaceId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.workspaceId !== this.props.match.params.workspaceId) {
            this.props.fetchAllWorkspaceBoards(this.props.workspaceId)
        }
    }


    render() {
        if (this.props.boards.length === 0) {
            return <NoBoardsIndex workspace={this.props.workspace}/>   
        } else {
            return <BoardsIndex 
                    boards={this.props.boards} 
                    workspace={this.props.workspace}
                />
        }
    }
}

export default WorkspaceBoardsIndex;