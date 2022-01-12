import { RECEIVE_BOARD_LISTS, RECEIVE_BOARD_LIST, REMOVE_BOARD_LIST  } from "../actions/list_actions";

const listsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)

    switch (action.type) {
        case RECEIVE_BOARD_LISTS:
            return action.lists;
        case RECEIVE_BOARD_LIST:
            nextState[action.list.id] = action.list
            return nextState;
        case REMOVE_BOARD_LIST:
            // nextState = Object.values(nextState)

            // const hash = {}
            // for (let i = 0; i < nextState.length; i++) {
            //     hash[nextState[i].id] = nextState[i]
            // }
            delete nextState[action.listId]

            return nextState;
        default:
            return prevState;
    }
}

export default listsReducer;