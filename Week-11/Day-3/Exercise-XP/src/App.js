// App.js
import './App.css';
import React, { Component } from 'react';
import BuggyCounter from './Components/BuggyCounter';
import ErrorBoundary from './Components/ErrorBoundary';
import FavColor from './Components/FavColor';

class App extends Component {
  render() {
    return (
      <div className="App tc">
        <BuggyCounter />
        <FavColor/>
      </div>
    );
  }
}

export default App;
