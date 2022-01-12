import { connect } from 'react-redux'
import Board from './board'
import { fetchWorkspaceBoard } from '../../actions/board_actions'
import { fetchAllBoardLists } from '../../actions/list_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        boardId: ownProps.match.params.board_id,
        board: state.entities.boards[ownProps.match.params.board_id],
        lists: Object.values(state.entities.lists)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWorkspaceBoard: (boardId) => dispatch(fetchWorkspaceBoard(boardId)),
        fetchAllBoardLists: (boardId) => dispatch(fetchAllBoardLists(boardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);