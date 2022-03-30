import { connect } from 'react-redux';
import WorkspaceBoardsIndex from './workspace_boards_index';
import { fetchAllWorkspaceBoards, destroyBoard, fetchWorkspaceBoard } from '../../../actions/board_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        workspaceId: parseInt(ownProps.match.params.workspaceId),
        boards: Object.values(state.entities.boards)
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        fetchAllWorkspaceBoards: (workspaceId) => dispatch(fetchAllWorkspaceBoards(workspaceId)),
        destroyBoard: (boardId) => dispatch(destroyBoard(boardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceBoardsIndex);