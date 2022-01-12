
export const postList = (list) => {
    return $.ajax({
        method: 'POST',
        url: `/api/lists`,
        data: { list }
    })
}

export const deleteList = (listId) => {
    debugger
    return $.ajax({
        method: 'DELETE',
        url: `/api/lists/${listId}`,
        data: { listId }
    })
}