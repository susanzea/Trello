import React from 'react';
import { withRouter, Link } from 'react-router-dom'

const BoardsIndexItem = (props) => {
    return (
        <div className="boards-index-item">
            <Link className='boards-index-item-link' 
                to={{
                    pathname: `/boards/${props.board.id}`, //I can access board using props.board on this line
                    state: props.board
                }}
            >
                <h3 className='boards-index-item-title'>{props.board.title}</h3>
            </Link>
            
            <button className='board-delete' onClick={props.destroyBoard} > — </button>
        </div>
    )
}

export default withRouter(BoardsIndexItem);