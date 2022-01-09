import { getAllUserWorkspaces, postWorkspace, deleteWorkspace } from "../util/workspace_api_util";



//action creators
export const RECEIVE_USER_WORKSPACES = `RECEIVE_USER_WORKSPACES`;

const receiveUserWorkspaces = (workspaces) => {
    return {
        type: RECEIVE_USER_WORKSPACES,
        workspaces
    }
}


export const RECEIVE_USER_WORKSPACE = `RECEIVE_USER_WORKSPACE`;

export const receiveUserWorkspace = (workspace) => {
    debugger
    return {
        type: RECEIVE_USER_WORKSPACE,
        workspace
    }
}


export const REMOVE_USER_WORKSPACE = `REMOVE_USER_WORKSPACE`;

export const removeUserWorkspace = (workspaceId) => {
    debugger
    return {
        type: REMOVE_USER_WORKSPACE,
        workspaceId
    }
}




//call thunk when home page mounts
export const fetchAllUserWorkspaces = (userId) => (dispatch) => {
    return getAllUserWorkspaces(userId)
    .then(workspaces => dispatch(receiveUserWorkspaces(workspaces)));   
}

export const createWorkspace = workspace => dispatch => {
    debugger
    return postWorkspace(workspace)
    .then(workspace => dispatch(receiveUserWorkspace(workspace)))
}



