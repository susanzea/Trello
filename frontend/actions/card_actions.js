import {
    getAllListCards,
    getListCard,
    postCard, 
    deleteCard
} from '../util/card_api_util';



//action creators
export const RECEIVE_LIST_CARDS = `RECEIVE_LIST_CARDS`;

export const receiveListCards = (cards) => {
    return {
        type: RECEIVE_LIST_CARDS,
        cards
    }
}

export const RECEIVE_LIST_CARD = `RECEIVE_LIST_CARD`;

export const receiveListCard = (card) => {
    return {
        type: RECEIVE_LIST_CARD,
        card
    }
}


export const REMOVE_LIST_CARD = `REMOVE_LIST_CARD`;

export const removeListCard = (cardId) => {
    return {
        type: REMOVE_LIST_CARD,
        cardId
    }
}




//thunk action creators
export const fetchAllListCards = (listId) => (dispatch) => {
    return getAllListCards(listId)
        .then(cards => dispatch(receiveListCards(cards)));
}

export const fetchListCard = (boardId) => (dispatch) => {
    return getListCard(boardId)
        .then(board => dispatch(receiveListCard(board)));
}

export const createCard = (card) => (dispatch) => {
    return postBoard(card)
        .then(card => dispatch(receiveWorkspaceBoard(card)));
}

export const destroyCard = (cardId) => (dispatch) => {
    return deleteCard(cardId)
        .then(() => dispatch(removeListCard(cardId)));
}
