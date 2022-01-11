import React from 'react';
import MainNavBarContainer from '../navbars/mainNavBar/main_nav_bar_container';
import BoardsIndexItem from './boards_index_item';

class WorkspaceBoardsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllWorkspaceBoards(this.props.workspaceId)
    }


    render() {
        if (!this.props.boards) {
            return <p>Create a board!</p>
        }
        console.log(this.props.boards)
        return (
            <div>
                <MainNavBarContainer />
                <ul className="workspace-boards-index">
                    {
                        this.props.boards.map((board, idx) => {
                            return <BoardsIndexItem key={board.id} idx={idx} destroyBoard={(boardId) => this.props.destroyBoard(boardId)} board={board} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default WorkspaceBoardsIndex;