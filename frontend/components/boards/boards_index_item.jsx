import React from 'react';
import { Link } from 'react-router-dom'

const BoardsIndexItem = (props) => {



    return (
        <Link className="boards-index-item"
            to={`/boards/${props.board.id}`}
        >
            <h3 className='workspace-boards-index-item-title'>{props.board.title}</h3>
            <button onClick={() => props.destroyBoard(props.board.id)}> — </button>
        </Link>
    )
}

export default BoardsIndexItem;