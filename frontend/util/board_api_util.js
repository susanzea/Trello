import { $CombinedState } from "redux"

export const getAllWorkspaceBoards = (workspaceId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/workspaces/${workspaceId}/boards`
    })
}

export const getWorkspaceBoard = (boardId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/boards/${boardId}`
    })
}

export const postBoard = (board) => {
    return $.ajax({
        method: 'POST',
        url: `/api/boards`,
        data: { board }
    })
}

export const deleteBoard = (boardId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/boards/${boardId}`,
        data: { boardId }
    })
}