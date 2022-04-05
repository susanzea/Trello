import React from 'react';
import { Redirect } from 'react-router';
import MainNavBar from '../navbars/mainNavBar/main_nav_bar';
import ListIndex from '../lists/list_index';
import BoardTitleForm from './board_title_form';

class Board extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleBoardDelete = this.handleBoardDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchWorkspaceBoard(parseInt(this.props.boardId))
    }

    handleBoardDelete() {
        this.props.destroyBoard(this.props.boardId);
        // TODO: after you get access to workspace, redirect to workspace show page that this board was on
        this.props.history.push('/home')
    }



    render() {
        if (!this.props.board) {
            return <p>loading!!</p>
        }

        return (
            <>
                <div className="board">
                    <MainNavBar />
                    <div className='board-header'>
                        <BoardTitleForm 
                            board={this.props.board} 
                            editBoard={this.props.editBoard}
                        />
                        <button 
                            className='delete-board'
                            onClick={this.handleBoardDelete}
                        >
                            <img src={window.delete_board} alt="delete board icon" />
                        </button>
                    </div>                    
                    <ListIndex
                    lists={this.props.lists}/>
                </div>
            </>
        )
    }

}

export default Board;