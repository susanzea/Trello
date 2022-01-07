import { RECEIVE_USER_WORKSPACES } from "../actions/workspace_actions";

const workspaceReducer = (prevState={}, action) => {
    Object.freeze(prevState);

    switch(action.type) {
        case RECEIVE_USER_WORKSPACES:

        default:
            return prevState;
    }
}