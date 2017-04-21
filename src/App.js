import React, { Component } from 'react';
import './App.css';
import Game from './component/Game'
import Board from './component/Board'
import {Ex, Oe} from './component/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game/>
        <Board/>
        <Ex/>
        <Oe/>
      </div>
    );
  }
}

export default App;
