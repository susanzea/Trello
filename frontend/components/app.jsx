import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBarContainer from './navbars/nav_bar_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import BoardIndex from './boards/board_index';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = (props) => {
    return(
        <div>
            <Switch>
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <ProtectedRoute exact path="/home" component={BoardIndex} />
                <Route exact path="/" component={NavBarContainer} />
            </Switch>
        </div>
    )
}

export default App;