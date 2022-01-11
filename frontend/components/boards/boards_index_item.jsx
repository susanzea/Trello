import React from 'react';
import { withRouter, Link } from 'react-router-dom'

const BoardsIndexItem = (props) => {


    debugger
    return (
        <div className="boards-index-item">
            <Link className='boards-index-item-link'
            to={{
                state: {
                    board: this.state.boards
                },
                pathname: `/boards/${props.board.id}`
            }}
        >
                <h3 className='boards-index-item-title'>{props.board.title}</h3>
            </Link>
        </div>
    )
}

export default withRouter(BoardsIndexItem);