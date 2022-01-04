import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBarContainer from './navbars/nav_bar_container';
import {SignupFormContainer, QuickSignupFormContainer} from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import BoardIndex from './boards/board_index';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import QuickSignup from './SplashPage/quick_signup';
import QuickSignupForm from './session/quick_signup_form';

const App = () => {
    return(
        <div>
            <Switch>
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/signup/:email" component={QuickSignupFormContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <ProtectedRoute exact path="/home" component={BoardIndex} />
                <AuthRoute exact path="/" component={QuickSignup} />
            </Switch>
        </div>
    )
}

export default App;