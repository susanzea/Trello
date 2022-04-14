import {
    getAllCardComments,
    getCardComment,
    postComment, 
    deleteComment,
    patchComment,
    getCommentUser
} from '../util/comment_api_util';



//action creators
export const RECEIVE_CARD_COMMENTS = `RECEIVE_CARD_COMMENTS`;

export const receiveCardComments = (comments) => {
    return {
        type: RECEIVE_CARD_COMMENTS,
        comments
    }
}

export const RECEIVE_CARD_COMMENT = `RECEIVE_CARD_COMMENT`;

export const receiveCardComment = (comment) => {
    return {
        type: RECEIVE_CARD_COMMENT,
        comment
    }
}


export const REMOVE_CARD_COMMENT = `REMOVE_CARD_COMMENT`;

export const removeCardComment = (commentId) => {
    return {
        type: REMOVE_CARD_COMMENT,
        commentId
    }
}




//thunk action creators
export const fetchAllCardComments = (cardId) => (dispatch) => {
    return getAllCardComments(cardId)
        .then(comments => dispatch(receiveCardComments(comments)));
}

export const fetchCardComment = (commentId) => (dispatch) => {
    return getCardComment(commentId)
        .then(comment => dispatch(receiveCardComment(comment)));
}

export const createComment = (comment) => (dispatch) => {
    return postComment(comment)
        .then(comment => dispatch(receiveCardComment(comment)));
}

export const destroyComment = (commentId) => (dispatch) => {
    return deleteComment(commentId)
        .then(() => dispatch(removeCardComment(commentId)));
}

export const editComment = (comment) => (dispatch) => {
    return patchComment(comment)
        .then(() => dispatch(receiveCardComment(comment)));
}

// export const fetchCommentUser = (userId) => (dispatch) => {
//     return getCommentUser(userId)
//         .then(user => dispatch(receiveCommentUser(user)));
// }