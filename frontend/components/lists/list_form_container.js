import ListForm from "./list_form";
import { connect } from 'react-redux';
import { createList, destroyList } from "../../actions/list_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        boardId: state.entities.boards[0].id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createList: (list) => dispatch(createList(list))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);