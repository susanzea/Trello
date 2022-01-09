import { getAllUserWorkspaces} from "../util/workspace_api_util";

export const RECEIVE_USER_WORKSPACES = `RECEIVE_USER_WORKSPACES`;

const receiveUserWorkspaces = (workspaces) => {
    return {
        type: RECEIVE_USER_WORKSPACES,
        workspaces
    }
}


//call thunk when home page mounts
export const fetchAllUserWorkspaces = (userId) => (dispatch) => {
    return getAllUserWorkspaces(userId)
    .then(workspaces => dispatch(receiveUserWorkspaces(workspaces)));   
}

