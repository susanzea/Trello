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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.workspaceId !== this.props.match.params.workspaceId) {
            this.props.fetchAllWorkspaceBoards(this.props.workspaceId)
        }
    }

    //note: look into component did update

    render() {
        if (!this.props.boards) {
            return <p>Create a board!</p>
        }
        return (
            <div className='workspace-boards-index'>
                <header>
                    <img src={window.generic_user_icon} alt="generic user icon" />
                    <h2>Workspace Boards</h2>
                </header>
                <ul className="boards-index-list">
                    {
                        this.props.boards.map((board, idx) => {
                            return <BoardsIndexItem 
                            key={board.id} idx={idx} 
                            destroyBoard={(boardId) => this.props.destroyBoard(boardId)} 
                            board={board} />
                        })
                    }
                    <button className="boards-index-button">Create new board</button>
                </ul>
            </div>
        )
    }
}

export default WorkspaceBoardsIndex;