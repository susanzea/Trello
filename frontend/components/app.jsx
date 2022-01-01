import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBarContainer from './navbars/nav_bar_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import BoardIndex from './boards/board_index';

const App = (props) => {
    return(
        <div>
            <header>
                <NavBarContainer/>
            </header>
            <Routes>
                
                <Route path="/signup" element={<SignupFormContainer />} />
                <Route path="/login" element={<LoginFormContainer />} />
                <Route path="/home" element={<BoardIndex />} />
            </Routes>
        </div>
    )
}

export default App;