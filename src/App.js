// src/App.js
import React from 'react';
import './App.css';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Budget from './pages/Budget';
import Administrator from './pages/Administrator';
import Transfer from './pages/Transfer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}> </Route>
          {/* <Route index element={<Login />} /> */}
          <Route path="home" element={<Home />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="budget" element={<Budget />}></Route>
          <Route path="transfer" element={<Transfer />}></Route>
          <Route path="admin" element={<Administrator />}></Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;