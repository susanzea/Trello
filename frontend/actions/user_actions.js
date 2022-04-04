import { getCommentUser } from "../util/user_api_util";

export const RECEIVE_COMMENT_USER = `RECEIVE_COMMENT_USER`;

export const receiveCommentUser = (user) => {
    return {
        type: RECEIVE_COMMENT_USER,
        user
    }
}

export const fetchCommentUser = (userId) => (dispatch) => {
    return getCommentUser(userId)
        .then(user => dispatch(receiveCommentUser(user)));
}