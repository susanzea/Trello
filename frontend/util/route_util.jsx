import React, { Component } from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const Auth = ({ path, component: Component, loggedIn, exact}) => {
    // debugger
    return (
        <Route 
            path={path}
            exact={exact}
            render={props => (
                loggedIn ? <Redirect to="/home" />
                :
                <Component {...props}/>
            )}
        />
    )
}

//loggedIn is evaluating to false
const Protected = ({path, component: Component, loggedIn, exact}) => {
    // debugger
    return (
        <Route
            path={path}
            exact={exact}
            render={props => (
                !loggedIn ? (<Redirect to="/login" />
                 ) : (
                <Component {...props} />)
            )}
        />
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: Boolean(state.session.id)
    }
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));