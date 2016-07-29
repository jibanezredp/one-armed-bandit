import React from 'react';
import { connect } from 'react-redux';

const App = () =>
  <div className='one-armed-bandit'></div>;

App.propTypes = {

};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
