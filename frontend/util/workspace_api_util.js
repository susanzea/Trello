//get id from current User


export const getAllUserWorkspaces = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/workspaces`
    })
}

