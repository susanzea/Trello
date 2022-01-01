import React from 'react';
import { Provider } from 'react-redux';

const Root = (props) => {
    <Provider store={props.store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
}