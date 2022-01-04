import { postUser, postSession, deleteSession } from '../util/session_api_util';



///////////action creators
export const RECEIVE_CURRENT_USER = `RECEIVE_CURRENT_USER`;

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}


export const LOGOUT_CURRENT_USER = `LOGOUT_CURRENT_USER`;

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}


export const RECEIVE_SESSION_ERRORS = `RECEIVE_SESSION_ERRORS`;

//errors passed in below will be an array
const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}






//////////thunk action creators

export const signup = user => dispatch => {
    return postUser(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveSessionErrors(err.responseJSON))
        )
}

export const login = user => dispatch => {
    debugger
    return postSession(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            err => {
                dispatch(receiveSessionErrors(err.responseJSON))
            }
        )
}

export const logout = () => dispatch => {
    return deleteSession()
        .then(() => dispatch(logoutCurrentUser()),
        err => dispatch(receiveSessionErrors(err.responseJSON))
        )
}