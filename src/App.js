// src/App.js
import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

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
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if username exists and password matches
    if (users[username] && users[username].password === password) {
      setLoggedIn(true);
      setUser(users[username]);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <div className="login-container">
          <h1 className="bank-name">XXXX BANK</h1>
          <div className="login-box">
            <div className="input-group">
              <label>USER NAME</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>LOGIN</button>
          </div>
        </div>
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
}

export default App;