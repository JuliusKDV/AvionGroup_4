import React, { useState } from 'react';
import Header from '../Components/Header';
import Layout from '../layouts/Layout';

function Administrator({ user, users, onAddUser }) {
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
      password: '',
      balance: 0,
      accountNumber: '',
    });
  };

  return (
    <div>
      <Layout user={user}>
        <Header>Administrator page</Header>
        <h2>All Users</h2>
        <table>
          {/* ... existing table code ... */}
        </table>

        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="password"
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

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Account Number</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(users).map((key) => (
              <tr key={key}>
                <td>{users[key].name}</td>
                <td>{users[key].accountNumber}</td>
                <td>₱{users[key].balance.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </div>
  );
}

export default Administrator;

