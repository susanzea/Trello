import { RECEIVE_USER_WORKSPACES, RECEIVE_USER_WORKSPACE, REMOVE_USER_WORKSPACE } from "../actions/workspace_actions";

//reducer only hit after refresh
const workspacesReducer = (prevState=[], action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)

    switch(action.type) {
        case RECEIVE_USER_WORKSPACES:
            debugger
            return Object.values(action.workspaces);
        case RECEIVE_USER_WORKSPACE:
            debugger
            nextState[action.workspace.id] = action.workspace
            return nextState;
        case REMOVE_USER_WORKSPACE:
            debugger
            delete nextState[action.workspaceId]
            debugger
            //nextState below is unchanged
            return Object.values(nextState);
        default:
            return prevState;
    }
}

export default workspacesReducer;