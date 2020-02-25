import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

const App = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

const mapStateToProps = state => {
  return {}
};

export default connect(mapStateToProps)(App);