import React, { useState } from 'react';
import Header from '../Components/Header';
import Layout from '../layouts/Layout';

function Add({ user, onAddUser }) {
  const [newUser, setNewUser] = useState({
    role: 'user',
    name: '',
    password: '',
    balance: 0,
    accountNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: name === 'balance' ? parseFloat(value) : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(newUser);
    setNewUser({
      role: 'user',
      name: '',
      email: '',
      password: '',
      balance: 0,
      accountNumber: '',
    });
  };

  return (
    <div>
      <Layout user={user}>
        <Header>Add a new user</Header>
        <div className="transfer-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              placeholder="Full name"
              required
            />
            <input
              type="text"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
            <input
              type="text"
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
            <input
              type="number"
              name="balance"
              value={newUser.balance}
              onChange={handleInputChange}
              placeholder="Balance"
              required
            />
            <input
              type="text"
              name="accountNumber"
              value={newUser.accountNumber}
              onChange={handleInputChange}
              placeholder="Account Number"
              required
            />
            <button type="submit">Add User</button>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default Add;

