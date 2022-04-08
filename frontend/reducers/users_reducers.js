import { 
    // RECEIVE_CURRENT_USER, 
    RECEIVE_COMMENT_USER } from "../actions/user_actions";

const usersReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)
    switch (action.type) {
        // case RECEIVE_CURRENT_USER:
        //     nextState = {};
        //     nextState[action.user.id] = action.user;
        //     return nextState;
        case RECEIVE_COMMENT_USER:
            nextState = {};
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return prevState;
    }
}

export default usersReducer;