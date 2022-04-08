import { getAllUserWorkspaces, 
    getUserWorkspace,
    postWorkspace, 
    deleteWorkspace,
    patchWorkspace 
} from "../util/workspace_api_util";



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
    return {
        type: RECEIVE_USER_WORKSPACE,
        workspace
    }
}


export const REMOVE_USER_WORKSPACE = `REMOVE_USER_WORKSPACE`;

export const removeUserWorkspace = (workspaceId) => {
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

export const fetchUserWorkspace = (workspaceId) => (dispatch) => {
    debugger
    return getUserWorkspace(workspaceId)
        .then(workspace => dispatch(receiveUserWorkspace(workspace)));
}

export const createWorkspace = workspace => dispatch => {
    return postWorkspace(workspace)
    .then(workspace => dispatch(receiveUserWorkspace(workspace)));
}

export const destroyWorkspace = workspaceId => dispatch => {
    return deleteWorkspace(workspaceId)
    .then(() => dispatch(removeUserWorkspace(workspaceId)));
}

export const editWorkspace = (workspace) => (dispatch) => {
    return patchWorkspace(workspace)
        .then(() => dispatch(receiveUserWorkspace(workspace)));
}