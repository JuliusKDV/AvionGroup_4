// src/components/Dashboard/Dashboard.js
import React from 'react';
import './Dashboard.css';

function Dashboard({ user }) {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">Logo/ Bank Name</div>
        <nav>
          <ul>
            <li>
              <a href="/">
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li>
              <a href="/budget">
                <i className="fas fa-wallet"></i> Budget App
              </a>
            </li>
            <li>
              <a href="/transfer">
                <i className="fas fa-exchange-alt"></i> Transfer
              </a>
            </li>
            {user.role === 'admin' && (
              <li>
                <a href="/admin">
                  <i className="fas fa-user-shield"></i> Administrator
                </a>
              </li>
            )}
            <li>
              <a href="/logout">
                <i className="fas fa-sign-out-alt"></i> Log-out
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="header">
          <h2>Welcome back, {user.name}!</h2>
          <p>August 3, 2024 12:01 pm</p>
        </div>
        <div className="account-info">
          <h3>Bank account balance as of August 3, 2024</h3>
          <div className="info-row">
            <p>{user.name} ({user.role === 'admin' ? 'Administrator' : 'User'})</p>
            <h2>₱{user.balance.toFixed(2)}</h2>
          </div>
          <p>Savings Account (Peso)</p>
          <p>{user.accountNumber}</p>
          {user.role === 'admin' && (
            <div className="admin-actions">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          )}
        </div>
        <h3>Recent transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Transaction</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {user.transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.name}</td>
                <td>{transaction.transaction}</td>
                <td>₱{transaction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
