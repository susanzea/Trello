
import React from 'react';
import { Switch, Route } from "react-router-dom";
import MainNavBarContainer from './navbars/mainNavBar/main_nav_bar_container';
import SignupFormContainer from './session/signup_form_container';
import QuickSignupFormContainer from './SplashPage/quick_signup_container';
import LoginFormContainer from './session/login_form_container';
import WorkspaceBoardsIndexContainer from './boards/workspace_board_index/workspace_boards_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import QuickSignup from './SplashPage/quick_signup';
import LeftWorkspacesNavBarContainer from './left_workspaces_nav_bar/left_workspaces_nav_bar_container';
import WorkspacesImage from './workspaces_image';
import BoardContainer from './boards/board_container';
import WorkspacesLanding from './workspaces_landing';

const App = () => {
    return(
        <>
            <ProtectedRoute path="/home" component={LeftWorkspacesNavBarContainer} />
            <ProtectedRoute path="/workspaces" component={LeftWorkspacesNavBarContainer} />
            <ProtectedRoute exact path="/home" component={WorkspacesLanding} />
            <ProtectedRoute path="/workspaces" component={MainNavBarContainer} />
            <ProtectedRoute path="/home" component={MainNavBarContainer} />
            
            <Switch>
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/quicksignup" component={QuickSignupFormContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <ProtectedRoute exact path="/workspaces/:workspaceId/boards" component={WorkspaceBoardsIndexContainer} />
                <AuthRoute exact path="/" component={QuickSignup} />
                <ProtectedRoute  exact path="/boards/:board_id" component={BoardContainer} />
            </Switch>
        </>
    )
}

export default App;

//maybe add wildcard to line 20 (/home, renders BoardsIndex)