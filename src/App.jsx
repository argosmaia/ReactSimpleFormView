import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './scripts/Login';
import Registrar from './scripts/Registrar';
import { PrimeReactProvider } from 'primereact/api';
import EnviarEditor from './scripts/EnviarEditor';
import Contact from './scripts/Contact';
import Menu from './scripts/Menu';
import Dissertacoes from './scripts/Dissertacoes';

export default function App(){
  return (
    <>
    <PrimeReactProvider>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/registrar' element = {<Registrar />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/editar' element = {<EnviarEditor />} />
          <Route path='/dissertacoes' element = {<Dissertacoes />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </>
  );
}
