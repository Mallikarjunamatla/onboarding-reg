import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import SwipeableTextMobileStepper from './components/Register';

function App() {
  return (
    <div className="App">
      <SwipeableTextMobileStepper />
    </div>
  );
}

export default App;
