import QuickSignupForm from '../session/quick_signup_form'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { signup, removeSessionErrors } from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        removeSessionErrors: () => dispatch(removeSessionErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickSignupForm);