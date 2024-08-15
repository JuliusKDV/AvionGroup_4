import React from 'react';
import Header from '../components/Header';
import Layout from '../layouts/Layout';

function Administrator({ user, users }) {
  return (
    <div>
      <Layout user={user}>
        <Header>Administrator page</Header>
        <h2>All Users</h2>
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
