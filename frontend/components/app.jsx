import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBarSplash from './navbars/nav_bar_splash';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = (props) => {
    return(
        <Routes>
            <Route path="/" element={<NavBarSplash/>} />
            <Route path="/signup" element={<SignupFormContainer/>} />
            <Route path="/login" element={<LoginFormContainer/>} />
        </Routes>
    )
}

export default App;