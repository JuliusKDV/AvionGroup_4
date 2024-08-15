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

const users = {
  john: {
    role: 'admin',
    name: 'John L. Dela Cruz',
    password: 'john123',
    balance: 30000,
    accountNumber: '47290539439',
    transactions: [
      { date: '08/02/2024', name: 'Mark L. Ocampo', transaction: 'External Transfer', amount: 20000 },
    ],
  },
  albert: {
    role: 'user',
    name: 'Albert L. Rivera',
    password: 'albert123',
    balance: 10000,
    accountNumber: '47290539449',
    transactions: [
      { date: '08/02/2024', name: 'Mark L. Ocampo', transaction: 'External Transfer', amount: 20000 },
    ],
  },
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data exists in local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      console.log("User");
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} users={users} />} />
        <Route path="home" element={<Home user={user} />} />
        <Route path="dashboard" element={<Dashboard user={user} />} />
        <Route path="budget" element={<Budget user={user}  />} />
        <Route path="transfer" element={<Transfer user={user} />} />
        <Route path="admin" element={<Administrator user={user} users={users} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;