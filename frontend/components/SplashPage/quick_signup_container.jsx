import QuickSignupForm from '../session/quick_signup_form'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    console.log('quick signup container!!!!!!!!!!')
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickSignupForm);