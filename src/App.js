// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Budget from './pages/Budget';
import Administrator from './pages/Administrator';
import Transfer from './pages/Transfer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data exists in local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      console.log("User:", storedUser);
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
        <Route path="home" element={<Home user={user} />} />
        <Route path="dashboard" element={<Dashboard user={user} />} />
        <Route path="budget" element={<Budget user={user}  />} />
        <Route path="transfer" element={<Transfer user={user} />} />
        <Route path="admin" element={<Administrator user={user}  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;