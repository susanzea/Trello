import LoginForm from "./login_form";
import { connect } from 'react-redux';
import { login, removeSessionErrors } from "../../actions/session_actions";

const mapStateToProps = state => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
        removeSessionErrors: () => dispatch(removeSessionErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);