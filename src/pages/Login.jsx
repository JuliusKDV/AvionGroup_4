import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

function Login({ onLogin, users }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if username exists and password matches
    if (users[username] && users[username].password === password) {
      const loggedInUser = users[username];
      onLogin(loggedInUser); // Call the onLogin function passed from App.js
      navigate("/dashboard");
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1 className="bank-name"><FontAwesomeIcon icon={faBuildingColumns} />  PhilBank</h1>
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
    </div>
  );
}

export default Login;
