import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let hello = 'Welcome to the road to learn react!';
    return (
      <div className="App">
        <h2>{hello}</h2>
      </div>
    );
  }
}

export default App;
