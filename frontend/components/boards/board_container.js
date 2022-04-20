import { connect } from 'react-redux'
import Board from './board'
import { fetchWorkspaceBoard, editBoard, destroyBoard } from '../../actions/board_actions'
import { fetchAllBoardLists } from '../../actions/list_actions'
import { fetchUserWorkspace } from '../../actions/workspace_actions'

const mapStateToProps = (state, ownProps) => {

    return {
        boardId: ownProps.match.params.board_id,
        board: state.entities.boards[ownProps.match.params.board_id],
        lists: Object.values(state.entities.lists),
        workspace: Object.values(state.entities.workspaces)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserWorkspace: (workspaceId) => dispatch(fetchUserWorkspace(workspaceId)),
        fetchWorkspaceBoard: (boardId) => dispatch(fetchWorkspaceBoard(boardId)),
        fetchAllBoardLists: (boardId) => dispatch(fetchAllBoardLists(boardId)),
        editBoard: (board) => dispatch(editBoard(board)),
        destroyBoard: (boardId) => dispatch(destroyBoard(boardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);