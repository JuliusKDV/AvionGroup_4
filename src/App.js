import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Budget from './pages/Budget';
import Administrator from './pages/Administrator';
import Add from './pages/Add';
import Transfer from './pages/Transfer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [inputValues, setInputValues] = useState({}); // Move this here

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
    'alba@email.com': {
      role: 'user',
      name: 'Alba Tan',
      balance: 5200,
      accountNumber: '47290523943',
      transactions: [
        { date: '08/12/2024', name: 'Mark L. Ocampo', transaction: 'External Transfer', amount: 50000 },
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

  const addBalance = (key, isAddition) => {
    const inputValue = parseFloat(inputValues[key]);
    if (!isNaN(inputValue)) {
      setUsers(prevUsers => ({
        ...prevUsers,
        [key]: {
          ...prevUsers[key],
          balance: isAddition
            ? prevUsers[key].balance + inputValue
            : prevUsers[key].balance - inputValue, // Subtract if isAddition is false
        },
      }));
      setInputValues(prevValues => ({
        ...prevValues,
        [key]: '',
      }));
    }
  };
  

  const handleInputChange = (event, key) => {
    const { value } = event.target;
    setInputValues({
      ...inputValues,
      [key]: value,
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} users={users} />} />
        <Route path="dashboard" element={<Dashboard user={user} />} />
        <Route path="budget" element={<Budget user={user} />} />
        <Route path="transfer" element={<Transfer user={user} users={users} setUsers={setUsers} />} />
        <Route 
          path="admin" 
          element={
            <Administrator 
              user={user} 
              users={users} 
              addBalance={addBalance} 
              handleInputChange={handleInputChange} 
              inputValues={inputValues} 
            />
          } 
        />
        <Route path="add" element={<Add user={user} onAddUser={handleAddUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
