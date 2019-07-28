import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom'
import Header from "./components/header"
import Home from './components/home';
import Results from './components/results';

class App extends Component {
  state = {
    submitted: false
  }

  handleSubmit = () => {
    this.setState({submitted: true})
  }

  render () {
    return (
      <div className="App">
        <Header />
        {
          this.state.submitted === true &&
          <Redirect to="/results" />
        }

        <Route exact path="/" render={() => <Home handleSubmit={this.handleSubmit}/>} />
        <Route path="/results" render={() => <Results />} />
        
      </div>
    );
  }
}

export default App
