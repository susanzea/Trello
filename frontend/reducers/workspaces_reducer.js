import { RECEIVE_USER_WORKSPACES, RECEIVE_USER_WORKSPACE, REMOVE_USER_WORKSPACE } from "../actions/workspace_actions";

const workspacesReducer = (prevState=[], action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)

    switch(action.type) {
        case RECEIVE_USER_WORKSPACES:
            return Object.values(action.workspaces);
        case RECEIVE_USER_WORKSPACE:
            nextState[action.workspace.id] = action.workspace
            return nextState;
        case REMOVE_USER_WORKSPACE:
            delete nextState[action.workspaceId]
            return nextState;
        default:
            return prevState;
    }
}

export default workspacesReducer;