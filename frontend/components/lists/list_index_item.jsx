import React from 'react';

const ListIndexItem = (props) => {
    debugger
    return(
        <div className='list-index-item'>
            <h1>{props.list.title}</h1>
            <button onClick={() => props.destroyList(props.list.id)}> — </button>
            <button> + Add a new card </button>
        </div>
    )
}

export default ListIndexItem;