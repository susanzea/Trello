import { RECEIVE_WORKSPACE_BOARDS, RECEIVE_WORKSPACE_BOARD, REMOVE_WORKSPACE_BOARD } from "../actions/board_actions";

const boardsReducer = (prevState=[], action) => {
    Object.freeze(prevState);
    let nextState = Object.assign({}, prevState)

    switch (action.type) {
        case RECEIVE_WORKSPACE_BOARDS:
            return Object.values(action.boards);
        case RECEIVE_WORKSPACE_BOARD:
            nextState[action.board.id] = action.board
            return Object.values(nextState);
        case REMOVE_WORKSPACE_BOARD:
            // debugger //delete action properly hitting
            // dletee not working in line below
            nextState = Object.values(nextState)

            const hash = {}
            for (let i = 0; i < nextState.length; i++) {
                hash[nextState[i].id] = nextState[i]
            }
            delete hash[action.boardId]

            // debugger
            //nextState below is unchanged
            return Object.values(hash);
        default:
            return prevState;
    }
}

export default boardsReducer;