
export const postList = (list) => {
    debugger
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