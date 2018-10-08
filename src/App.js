import React, { Component } from 'react';
import Header from './components/header/header.js'
import VoteTracker from './components/vote_tracker/vote_tracker.js'
import Footer from './components/footer/footer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <VoteTracker/>
        <Footer/>
      </div>
    );
  }
}

export default App;
