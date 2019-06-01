import React, { Component } from 'react';

import Result from './components/layout/Result';
import Castvote from './components/layout/Castvote';
import Addvote from './components/layout/Addvote';
import Slider from './components/layout/Slider';


import './App.css';

class App extends Component {
  render() {
    return (
     <div>
        <Addvote />
        <Castvote />
        <Result />
        <Slider />
     </div>
     
        );
  }
}

export default App;
