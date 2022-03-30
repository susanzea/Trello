import React from 'react';
import MainNavBarContainer from '../../navbars/mainNavBar/main_nav_bar_container';
import NoBoardsIndex from './no_boards_index';
import BoardsIndex from './boards_index';


class WorkspaceBoardsIndex extends React.Component {
    constructor(props) {
        super(props);
        debugger
        
        this.state = {
            title: '',
            workspace_id: this.props.workspaceId
        }
    }

    componentDidMount() {
        this.props.fetchAllWorkspaceBoards(this.props.workspaceId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.workspaceId !== this.props.match.params.workspaceId) {
            this.props.fetchAllWorkspaceBoards(this.props.workspaceId)
        }
    }


    render() {
        if (this.props.boards.length === 0) {
            return <NoBoardsIndex workspaceId={this.props.workspaceId}/>   
        } else {
            return <BoardsIndex 
                    boards={this.props.boards} 
                    workspaceId={this.props.workspaceId}
                />
        }
    }
}

export default WorkspaceBoardsIndex;