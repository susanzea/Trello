import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {
    signup,
    login,
    logout
} from './actions/session_actions';
import Root from './components/root'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');

    let preloadedState;
    if(window.currentUser) {
        preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: {
                id: window.currentUser.id
            }
        }
        delete window.currentUser;
    } else {
        preloadedState = {};
    }

    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root);
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
})