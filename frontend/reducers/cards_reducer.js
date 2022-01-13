import { 
    RECEIVE_LIST_CARDS, 
    RECEIVE_LIST_CARD, 
    REMOVE_LIST_CARD } from "../actions/card_actions";

const cardsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)

    switch (action.type) {
        case RECEIVE_LIST_CARDS:
            debugger
            return action.cards;
        case RECEIVE_LIST_CARD:
            nextState[action.card.id] = action.card
            return nextState;
        case REMOVE_LIST_CARD:
            // const hash = {}
            // for (let i = 0; i < nextState.length; i++) {
            //     hash[nextState[i].id] = nextState[i]
            // }
            delete nextState[action.cardId]

            return nextState;
        default:
            return prevState;
    }
}

export default cardsReducer;