
export const getAllBoardLists = (boardId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/boards/${boardId}/lists`
    })
}

export const postList = (list) => {
    return $.ajax({
        method: 'POST',
        url: `/api/lists`,
        data: { list }
    })
}

export const deleteList = (listId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/lists/${listId}`,
        data: { listId }
    })
}