import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

// THIS COMPONENT IS FOR WRAP THE APP WITH REDUX CONFIGURATION (EVERY TEST COMPONENT HAS TO HAVE IT)

export default (props) => {
    return (
        <Provider store={createStore(reducers, {})}>
            {props.children}
        </Provider>
    )
};