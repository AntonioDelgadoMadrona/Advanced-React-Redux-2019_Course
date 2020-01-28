import React from 'react';
import ReactDOM from 'react-dom';

// DEFINE IN ROOT.js
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from 'reducers';

import Root from 'Root';

import App from 'components/App';

import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
);