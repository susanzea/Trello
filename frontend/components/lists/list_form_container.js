import ListForm from "./list_form";
import { connect } from 'react-redux';
import { createList, destroyList } from "../../actions/list_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        boardId: ownProps.match.params.board_id
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        createList: (list) => dispatch(createList(list))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListForm));