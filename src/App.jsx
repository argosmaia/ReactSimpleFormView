import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './scripts/Login';
import Registrar from './scripts/Registrar';
import Home from './scripts/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/registrar' element = {<Registrar />} />
        <Route path='/home' element = {<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
