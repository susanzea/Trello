import React from 'react';
import { connect } from 'react-redux';
import MainNavBar from './main_nav_bar';
import { logout } from '../../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNavBar));