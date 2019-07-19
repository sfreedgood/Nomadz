import React from 'react';
import './App.css';
import Home from './components/home';
import DestinationList from './components/results';

//Redux
import { connect } from "react-redux"

function mapStateToProps (state) {
  const { test } = state
  return { test }
};

function mapDispatchToProps (dispatch) { //list of action-creators to be dispatched
  return {
    test: (testVal) => dispatch({type: "TEST", payload: {test: testVal}}), 
  }
}

function App({test}) {
  const testFunc = val => {
    console.log("Clicked")
    test(val)
  }
  return (
    <div onClick={testFunc} className="App">
      <Home />
      <DestinationList />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App) //component goes here
