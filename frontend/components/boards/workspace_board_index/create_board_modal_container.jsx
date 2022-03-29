import { connect } from 'react-redux';
import CreateBoardModal from './create_board_modal';
import { createBoard} from '../../../actions/board_actions'

const mapStateToProps = (state, ownProps) => {
    debugger

    return {
        workspaceId: ownProps.workspaceId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createBoard: (board) => dispatch(createBoard(board))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardModal);