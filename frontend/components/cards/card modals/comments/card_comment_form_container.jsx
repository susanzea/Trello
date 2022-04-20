import CardCommentForm from "./card_comment_form";
import { connect } from 'react-redux';
import { fetchUser } from "../../../../actions/user_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.id,
        commenter: Object.values(state.entities.users)[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}


export default withRouter(connect(mapStateToProps)(CardCommentForm));