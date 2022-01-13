import { 
        getAllWorkspaceBoards,
        getWorkspaceBoard,
        postBoard,
        deleteBoard
    } from "../util/board_api_util";
import { receiveBoardLists } from "./list_actions";
import { receiveListCards } from "./card_actions";

//action creators
export const RECEIVE_WORKSPACE_BOARDS = `RECEIVE_WORKSPACE_BOARDS`;

const receiveWorkspaceBoards = (boards) => {
    return {
        type: RECEIVE_WORKSPACE_BOARDS,
        boards
    }
}


export const RECEIVE_WORKSPACE_BOARD = `RECEIVE_WORKSPACE_BOARD`;

export const receiveWorkspaceBoard = (board) => {
    return {
        type: RECEIVE_WORKSPACE_BOARD,
        board
    }
}


export const REMOVE_WORKSPACE_BOARD = `REMOVE_WORKSPACE_BOARD`;

export const removeWorkspaceBoard = (boardId) => {
    return {
        type: REMOVE_WORKSPACE_BOARD,
        boardId
    }
}




//thunk action creators
export const fetchAllWorkspaceBoards = (workspaceId) => (dispatch) => {
    return getAllWorkspaceBoards(workspaceId)
    .then(boards => dispatch(receiveWorkspaceBoards(boards)));
}

export const fetchWorkspaceBoard = (boardId) => (dispatch) => {
    return getWorkspaceBoard(boardId)
        .then(({ board, cards=[], lists=[] }) => {
            debugger
            dispatch(receiveListCards(cards)),
            dispatch(receiveBoardLists(lists)),
            dispatch(receiveWorkspaceBoard(board))
        });
}
//issue: dispatch 3 times, for board, lists, cards

export const createBoard = (board) => (dispatch) => {
    return postBoard(board)
        .then(board => dispatch(receiveWorkspaceBoard(board)));
}

export const destroyBoard = (boardId) => (dispatch) => {
    return deleteBoard(boardId)
        .then(()=> dispatch(removeWorkspaceBoard(boardId)));
}