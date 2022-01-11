import { connect } from 'react-redux'
import Board from './board'
import { fetchWorkspaceBoard } from '../../actions/board_actions'

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        boardId: ownProps.match.params.board_id,
        board: state.entities.boards[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWorkspaceBoard: (boardId) => dispatch(fetchWorkspaceBoard(boardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);