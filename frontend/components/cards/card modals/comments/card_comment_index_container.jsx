import CardCommentIndex from "./card_comments_index";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return null;
}

const mapDispatchToProps = dispatch => {
    return null;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardCommentIndex));