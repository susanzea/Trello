import React from "react";
import SignupForm from "./signup_form";
import { connect } from 'react-redux';
import { signup } from "../../actions/session_actions";

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user))
    }
}

export default connect(null, mapDispatchToProps)(SignupForm);