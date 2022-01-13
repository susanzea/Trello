
export const getAllListCards = (cardId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/lists/${listId}/cards`
    })
}

export const getListCard = (cardId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/cards/${cardId}`
    })
}

export const postCard = (card) => {
    return $.ajax({
        method: 'POST',
        url: `/api/cards`,
        data: { card }
    })
}

export const deleteCard = (cardId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cards/${cardId}`,
        data: { cardId }
    })
}