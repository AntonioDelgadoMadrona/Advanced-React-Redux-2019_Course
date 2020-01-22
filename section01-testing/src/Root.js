import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

// THIS COMPONENT IS FOR WRAP THE APP WITH REDUX CONFIGURATION (EVERY TEST COMPONENT HAS TO HAVE IT)

export default ({ children, initialState = {} }) => {

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxPromise)
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};