import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; //importing the automatic time and date
import Layout from '../layouts/Layout';

function Dashboard() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Fetch the user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  
  if (!user) {
    return <div>Loading...</div>;
  }

  return (


    //Layout user fetches the sidebar and main content layout
    <Layout user={user}>
      <Header>Welcome back!</Header>
      <div className="account-info">
        <div className="account-left">
          <h2>Account balance </h2>
          <p>{user.name} ({user.role === 'admin' ? 'Administrator' : 'User'})</p>
          <p>Savings Account (Peso)</p>
          <p>{user.accountNumber}</p>
        </div>
        <div className="account-right">
          <h2>₱{user.balance.toFixed(2)}</h2>
          {user.role === 'admin' && (
            <div className="admin-actions">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          )}
        </div>
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
    </Layout>
  );
}

export default Dashboard;
