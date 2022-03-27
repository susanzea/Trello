import React from 'react';
import MainNavBar from '../navbars/mainNavBar/main_nav_bar';
import ListIndex from '../lists/list_index';
import BoardTitleForm from './board_title_form';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWorkspaceBoard(parseInt(this.props.boardId))
    }

    render() {
        if (!this.props.board) {
            return <p>loading!!</p>
        }

        return (
            <>
                <div className="board">
                    <MainNavBar />
                    <BoardTitleForm 
                        board={this.props.board} 
                        editBoard={this.props.editBoard}
                    />
                    <ListIndex
                    lists={this.props.lists}/>
                </div>
            </>
        )
    }

}

export default Board;