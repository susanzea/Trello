import CardCommentForm from "./card_comment_form";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return null;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardCommentForm));