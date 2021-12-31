import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const noCurrentUser = {
    id: null
}

const sessionReducer = (prevState = noCurrentUser, action) => {
    Object.freeze(prevState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id };
        case LOGOUT_CURRENT_USER:
            return prevState;
        default:
            return prevState;
    }
} 

export default sessionReducer;