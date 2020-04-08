import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import Kurs from './Components/Kurs/Kurs';
import Start from './Components/Start/Start';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={Home} exact />
        <Route path='/kurs' component={Kurs} />
        <Route path='/start' component={Start} />
      </div>
    </BrowserRouter>
  );
}

export default App;
