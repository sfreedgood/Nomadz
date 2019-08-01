import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Header from "./components/header"
import Home from './components/home';
import Results from './components/results';
import About from './components/about';
import Footer from './components/footer';

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
        
        <div className="main">
          <Route exact path="/" render={() => <Home />} />
          <Route path="/results" render={() => <Results />} />
          <Route path="/about" render={() => <About />} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App
