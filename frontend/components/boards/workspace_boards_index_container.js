import { connect } from 'react-redux';
import WorkspaceBoardsIndex from './workspace_boards_index';
import { fetchAllWorkspaceBoards } from '../../actions/board_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        workspaceId: parseInt(ownProps.match.params.workspaceId),
        boards: state.entities.boards
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllWorkspaceBoards: (workspaceId) => dispatch(fetchAllWorkspaceBoards(workspaceId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceBoardsIndex);