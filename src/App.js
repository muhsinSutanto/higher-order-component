import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name='muhsin' />
        <HoverCounter />
        
      </div>
    );
  }
}

export default App;
