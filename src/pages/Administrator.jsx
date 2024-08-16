import React from 'react';
import Header from '../Components/Header';
import Layout from '../layouts/Layout';

function Administrator({ user, users, addBalance, handleInputChange, inputValues }) {

  return (
    <div>
      <Layout user={user}>
        <Header>Administrator view</Header>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Account Number</th>
              <th>Balance</th>
              <th>Add/Subtract Balance</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(users).map((key) => (
              <tr key={key}>
                <td>{users[key].name}</td>
                <td>{users[key].accountNumber}</td>
                <td>₱{users[key].balance.toFixed(2).toLocaleString()}</td>
                <td className='plusminus'>
                <button onClick={() => addBalance(key, true)}>+</button>
                  <input
                    type="number"
                    value={inputValues[key] || ''}
                    onChange={(event) => handleInputChange(event, key)}
                  />
                  <button onClick={() => addBalance(key, false)}>-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </div>
  );
}

export default Administrator;
