import { connect } from 'react-redux';
import WorkspaceBoardsIndex from './workspace_boards_index';
import { fetchAllWorkspaceBoards, createBoard } from '../../actions/board_actions'

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        workspaceId: parseInt(ownProps.match.params.workspaceId),
        boards: Object.values(state.entities.boards)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllWorkspaceBoards: (workspaceId) => dispatch(fetchAllWorkspaceBoards(workspaceId)),
        createBoard: (board) => dispatch(createBoard(board))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceBoardsIndex);