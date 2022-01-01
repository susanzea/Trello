import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState);
    debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            nextState[action.user.id] = action.user;
            debugger
            return nextState;
        default:
            return prevState;
    }
}

export default usersReducer;