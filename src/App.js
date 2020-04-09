import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import Kurs from './Components/Kurs/Kurs';
import Start from './Components/Start/Start';
import SetIntervalCom from './Components/SetIntervalCom';
import Certificate from './Components/Zertifikat/Certificate';
import NavBar from './Components/NavBar';
import GoodLuck from './Components/Zertifikat/GoodLuck';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path='/' component={Home} exact />
        <Route path='/kurs' component={Kurs} />
        <Route path='/start' component={Start} />
        <Route path='/Certificate' component={Certificate} />
        <Route path='/goodluck' component={GoodLuck} />
      </div>
    </BrowserRouter>
  );
}

export default App;
