import CardCommentsIndexItem from "./card_comments_index_item";
import { connect } from 'react-redux';
import { editComment, destroyComment } from "../../../../actions/comment_actions";
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
    return {
        editComment: (comment) => dispatch(editComment(comment)),
        destroyComment: (commentId) => dispatch(destroyComment(commentId))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CardCommentsIndexItem));