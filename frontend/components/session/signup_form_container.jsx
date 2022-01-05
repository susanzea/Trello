import React from "react";
import SignupForm from "./signup_form";
import QuickSignupForm from "./quick_signup_form";
import { connect } from 'react-redux';
import { signup, removeSessionErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => {
    // debugger
    //check ownprops here
    return {
        errors: state.errors.session,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        removeSessionErrors: () => dispatch(removeSessionErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);