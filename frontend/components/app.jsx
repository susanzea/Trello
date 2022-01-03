import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBarContainer from './navbars/nav_bar_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import BoardIndex from './boards/board_index';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import QuickSignup from './SplashPage/quick_signup';
import NavBar from './navbars/nav_bar';
const App = () => {
    return(
        <div>
            <Switch>
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <ProtectedRoute exact path="/home" component={BoardIndex} />
                <AuthRoute exact path="/" component={QuickSignup} />
            </Switch>
        </div>
    )
}

export default App;