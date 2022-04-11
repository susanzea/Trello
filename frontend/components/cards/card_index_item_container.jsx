import CardIndexItem from "./card_index_item";
import { connect } from 'react-redux';
import { fetchAllCardComments } from "../../actions/comment_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    if (!state.entities.comments) {
        return null;
    }

    return {
        comments: Object.values(state.entities.comments)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCardComments: (cardId) => dispatch(fetchAllCardComments(cardId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardIndexItem));