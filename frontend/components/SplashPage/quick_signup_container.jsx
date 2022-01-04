import QuickSignup from './quick_signup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const mapStateToProps = state => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);