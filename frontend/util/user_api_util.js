export const getCommentUser = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`,
        data: { userId }
    })
}