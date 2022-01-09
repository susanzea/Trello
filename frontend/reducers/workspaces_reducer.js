import { RECEIVE_USER_WORKSPACES } from "../actions/workspace_actions";

const workspacesReducer = (prevState=[], action) => {
    Object.freeze(prevState);
    debugger

    switch(action.type) {
        case RECEIVE_USER_WORKSPACES:
            debugger
            return Object.values(action.workspaces);
        default:
            return prevState;
    }
}

export default workspacesReducer;