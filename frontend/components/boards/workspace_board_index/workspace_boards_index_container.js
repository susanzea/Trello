import { connect } from 'react-redux';
import WorkspaceBoardsIndex from './workspace_boards_index';
import { fetchAllWorkspaceBoards, destroyBoard, fetchWorkspaceBoard } from '../../../actions/board_actions'
import { fetchUserWorkspace } from '../../../actions/workspace_actions';

const mapStateToProps = (state, ownProps) => {
    debugger

    return {
        workspaceId: parseInt(ownProps.match.params.workspaceId),
        workspace: state.entities.workspaces[ownProps.match.params.workspaceId],
        boards: Object.values(state.entities.boards)
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        fetchUserWorkspace: (workspaceId) => dispatch(fetchUserWorkspace(workspaceId)),
        fetchAllWorkspaceBoards: (workspaceId) => dispatch(fetchAllWorkspaceBoards(workspaceId)),
        destroyBoard: (boardId) => dispatch(destroyBoard(boardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceBoardsIndex);