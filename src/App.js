import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import Kurs from './Components/Kurs/Kurs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={Home} exact />
        <Route path='/Kurs/Kurs' component={Kurs} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
