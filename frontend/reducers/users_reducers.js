import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (prevState={}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return prevState;
    }
}

export default usersReducer;