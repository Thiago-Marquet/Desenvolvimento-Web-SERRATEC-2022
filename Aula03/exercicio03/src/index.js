import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Enviar from './components/Calculadora';
import Lista from './components/List';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import Exercicios from './components/Exercicios';
import Exibir from './components/Exibir';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='exercicios/exibir/cadastro' element={<Cadastro/>}/>
        <Route path='exercicios/exibir/calculadora' element={<Enviar/>}/>
        <Route path='exercicios/exibir/tarefas' element={<Lista/>}/>
        <Route path='/exercicios' element={<Exercicios/>}/>
        <Route path='/exercicios/exibir' element={<Exibir/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals