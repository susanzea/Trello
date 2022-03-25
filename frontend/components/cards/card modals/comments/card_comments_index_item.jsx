import React from 'react';

function CommentsIndexItem(props) {




    return (
        <div>
            <p>{props.comment.body}</p>
        </div>
    )
}

export default CommentsIndexItem;