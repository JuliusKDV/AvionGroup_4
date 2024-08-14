import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

export function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setLoggedIn(true);
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (username, password) => {
    if (users[username] && users[username].password === password) {
      const loggedInUser = users[username];
      setLoggedIn(true);
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      navigate("/home");
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem('user');
    navigate("/login");
  };

  return {
    loggedIn,
    user,
    handleLogin,
    handleLogout,
  };
}
