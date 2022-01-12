import { postList, deleteList, getAllBoardLists } from "../util/list_api_util";


//action creators

export const RECEIVE_BOARD_LISTS = `RECEIVE_BOARD_LISTS`;

export const receiveBoardLists = (lists) => {
    return {
        type: RECEIVE_BOARD_LISTS,
        lists
    }
}

export const RECEIVE_BOARD_LIST = `RECEIVE_BOARD_LIST`;

export const receiveBoardList = (list) => {
    return {
        type: RECEIVE_BOARD_LIST,
        list
    }
}

export const REMOVE_BOARD_LIST = `REMOVE_BOARD_LIST`;

export const removeBoardList = (listId) => {
    return {
        type: REMOVE_BOARD_LIST,
        listId
    }
}




//thunk action creators
export const fetchAllBoardLists = (boardId) => (dispatch) => {
    return getAllBoardLists(boardId)
        .then(lists => dispatch(receiveBoardLists(lists)));
}

export const createList = (list) => (dispatch) => {
    return postList(list)
        .then(list => dispatch(receiveBoardList(list)));
}

export const destroyList = (listId) => (dispatch) => {
    return deleteList(listId)
        .then(() => dispatch(removeBoardList(listId)));
}