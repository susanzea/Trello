
export const postList = (list) => {
    return $.ajax({
        method: 'POST',
        url: `/api/boards`,
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