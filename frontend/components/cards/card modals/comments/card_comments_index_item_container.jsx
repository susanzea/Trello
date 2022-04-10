import CardCommentsIndexItem from "./card_comments_index_item";
import { connect } from 'react-redux';
import { editComment, destroyComment, fetchAllCardComments } from "../../../../actions/comment_actions";
import { fetchCommentUser } from "../../../../actions/user_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        commenter: Object.values(state.entities.users)[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editComment: (comment) => dispatch(editComment(comment)),
        destroyComment: (commentId) => dispatch(destroyComment(commentId)),
        fetchAllCardComments: (cardId) => dispatch(fetchAllCardComments(cardId)),
        fetchCommentUser: (userId) => dispatch(fetchCommentUser(userId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardCommentsIndexItem));