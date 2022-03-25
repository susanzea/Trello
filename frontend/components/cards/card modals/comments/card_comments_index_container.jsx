import CardCommentsIndex from "./card_comments_index";
import { connect } from 'react-redux';
import { fetchAllCardComments } from "../../../../actions/comment_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    if (!state.entities.comments) {
        return null;
    }

    return {
        comments: Object.values(state.entities.comments)
    }
}


const mapDispatchToProps = dispatch => {
    debugger
    return {
        fetchAllCardComments: (cardId) => dispatch(fetchAllCardComments(cardId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardCommentsIndex));