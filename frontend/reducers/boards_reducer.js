import { RECEIVE_WORKSPACE_BOARDS, RECEIVE_WORKSPACE_BOARD, REMOVE_WORKSPACE_BOARD } from "../actions/board_actions";

const boardsReducer = (prevState=[], action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)

    switch (action.type) {
        case RECEIVE_WORKSPACE_BOARDS:
            return action.boards;
        case RECEIVE_WORKSPACE_BOARD:
            nextState[action.board.id] = action.board
            return nextState;
        case REMOVE_WORKSPACE_BOARD:
            // const hash = {}
            // for (let i = 0; i < nextState.length; i++) {
            //     hash[nextState[i].id] = nextState[i]
            // }
            delete nextState[action.boardId]

            return nextState;
        default:
            //default being hit
            return prevState;
    }
}

export default boardsReducer;