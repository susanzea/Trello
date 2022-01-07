import React from 'react';
import { Switch, Route } from "react-router-dom";
import MainNavBarContainer from './navbars/mainNavBar/main_nav_bar';
import SignupFormContainer from './session/signup_form_container';
import QuickSignupFormContainer from './SplashPage/quick_signup_container';
import LoginFormContainer from './session/login_form_container';
import BoardIndex from './boards/board_index';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import QuickSignup from './SplashPage/quick_signup';

const App = () => {
    return(
        <>
            <MainNavBarContainer/>

            <Switch>
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/quicksignup" component={QuickSignupFormContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <ProtectedRoute exact path="/home" component={BoardIndex} />
                <AuthRoute exact path="/" component={QuickSignup} />
            </Switch>
        </>
    )
}

export default App;