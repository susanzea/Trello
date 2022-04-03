import { getCommentUser } from "../util/user_api_util";

export const fetchCommentUser = (userId) => (dispatch) => {
    return getCommentUser(userId)
        .then(user => dispatch(receiveCommentUser(user)));
}