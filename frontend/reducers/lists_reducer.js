import { RECEIVE_BOARD_LIST, REMOVE_BOARD_LIST  } from "../actions/list_actions";

const listsReducer = (prevState = [], action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)
    debugger //correct action, list payload undefined

    switch (action.type) {
        case RECEIVE_BOARD_LIST:
            debugger
            nextState[action.list.id] = action.list
            return Object.values(nextState);
        case REMOVE_BOARD_LIST:
            debugger
            nextState = Object.values(nextState)

            const hash = {}
            for (let i = 0; i < nextState.length; i++) {
                hash[nextState[i].id] = nextState[i]
            }
            delete hash[action.listId]

            return Object.values(hash);
        default:
            debugger
            return prevState;
    }
}

export default listsReducer;