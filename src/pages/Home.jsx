import React from 'react';
import Header from '../components/Header'; //importing the automatic time and date
import Layout from '../layouts/Layout';

function Home({ user }) {
  return (
      <Layout user={user}>
      <Header>Hello there!</Header>
      <Header>Hello there!</Header>
      <Header>Hello there!</Header>
      <Header>Hello there!</Header>
      <Header>Hello there!</Header>
      <Header>Hello there!</Header>

      <div className="account-info">
        <div className="account-left">
          <h2>Account balance </h2>
          <p>Hello</p>
          <p>Savings Account (Peso)</p>
          <p>1000</p>
        </div>
        <div className="account-right">
          <h2>₱3000</h2>
        
            <div className="admin-actions">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          
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
        
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>P1000</td>
            </tr>
          
        </tbody>
      </table>
      </Layout>
    
  );
}

export default Home;