import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBarSplash from './navbars/nav_bar_splash';
import SignupForm from './session/signup_form';
import LoginForm from './session/login_form';

const App = (props) => {
    return(
        <Routes>
            <Route path="/" element={<NavBarSplash/>} />
            <Route path="/signup" element={<SignupForm/>} />
            <Route path="/login" element={<LoginForm/>} />
        </Routes>
    )
}

export default App;