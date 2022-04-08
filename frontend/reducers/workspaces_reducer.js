import { RECEIVE_USER_WORKSPACES, RECEIVE_USER_WORKSPACE, REMOVE_USER_WORKSPACE } from "../actions/workspace_actions";

//reducer only hit after refresh
const workspacesReducer = (prevState=[], action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)

    switch(action.type) {
        case RECEIVE_USER_WORKSPACES:
            return action.workspaces;
        case RECEIVE_USER_WORKSPACE:
            debugger
            nextState[action.workspace.id] = action.workspace
            return nextState;
        case REMOVE_USER_WORKSPACE:
            // nextState = Object.values(nextState)

            // const hash = {}
            // for (let i = 0; i < nextState.length; i++) {
            //     hash[nextState[i].id] = nextState[i]
            // }
            // delete hash[action.workspaceId]

            // return Object.values(hash);
            delete nextState[action.workspaceId];
            return nextState;
        default:
            return prevState;
    }
}

export default workspacesReducer;