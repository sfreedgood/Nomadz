import React from 'react';
import logo from './logo.svg';
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => testFunc(true)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home />
      <DestinationList />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App) //component goes here
