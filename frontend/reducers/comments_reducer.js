import { 
    RECEIVE_CARD_COMMENTS, 
    RECEIVE_CARD_COMMENT, 
    REMOVE_CARD_COMMENT } from "../actions/comment_actions";

const commentsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)

    switch (action.type) {
        case RECEIVE_CARD_COMMENTS:
            // comments accrurately being fetched
            return action.comments;
        case RECEIVE_CARD_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState;
        case REMOVE_CARD_COMMENT:
            debugger
            delete nextState[action.commentId]

            return nextState;
        default:
            return prevState;
    }
}

export default commentsReducer;