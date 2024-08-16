import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Budget from './pages/Budget';
import Administrator from './pages/Administrator';
import Add from './pages/Add';
import Transfer from './pages/Transfer';
import Deposit from './pages/Deposit';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  const [users, setUsers] = useState({
    'john@email.com': {
      role: 'admin',
      name: 'John L. Dela Cruz',
      email: 'john@email.com',
      password: 'john123',
      balance: 30000,
      accountNumber: '47290539439',
      transactions: [
        { date: '08/02/2024', name: 'Mark L. Ocampo', transaction: 'External Transfer', amount: 20000 },
      ],
    },
    'albert@email.com': {
      role: 'user',
      name: 'Albert L. Rivera',
      email: 'albert@email.com',
      password: 'albert123',
      balance: 10000,
      accountNumber: '47290539449',
      transactions: [
        { date: '08/02/2024', name: 'Mark L. Ocampo', transaction: 'External Transfer', amount: 20000 },
      ],
    },
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleAddUser = (newUser) => {
    const username = newUser.name.toLowerCase().split(' ')[0];
    setUsers(prevUsers => ({
      ...prevUsers,
      [username]: {
        ...newUser,
        transactions: [],
      }
    }));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} users={users} />} />
        <Route path="home" element={<Home user={user} />} />
        <Route path="dashboard" element={<Dashboard user={user} />} />
        <Route path="budget" element={<Budget user={user}  />} />
        <Route path="transfer" element={<Transfer user={user} />} />
        <Route path="deposit" element={<Deposit user={user} />} />
        <Route path="admin" element={<Administrator user={user} users={users}  />} />
        <Route path="add" element={<Add user={user}  onAddUser={handleAddUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;