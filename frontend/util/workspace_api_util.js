//get id from current User


export const getAllUserWorkspaces = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/workspaces`
    })
}

export const postWorkspace = (workspace) => {
    return $.ajax({
        method: 'POST',
        url: `/api/workspaces`,
        data: { workspace }
    })
}

export const deleteWorkspace = (workspaceId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/workspaces/${workspaceId}`,
        data: { workspaceId }
    })
}