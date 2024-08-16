import React, { useState } from 'react';
import Header from '../Components/Header'; 
import Layout from '../layouts/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';

function Transfer({ user, users, setUsers }) { // Now includes setUsers prop
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();

    // Parse the amount as a float
    const transferAmount = parseFloat(amount);

    // Find the users corresponding to the fromAccount and toAccount
    const fromUserKey = Object.keys(users).find(key => users[key].accountNumber === fromAccount);
    const toUserKey = Object.keys(users).find(key => users[key].accountNumber === toAccount);

    // Perform the transfer by updating the user balances
    setUsers(prevUsers => ({
      ...prevUsers,
      [fromUserKey]: {
        ...prevUsers[fromUserKey],
        balance: prevUsers[fromUserKey].balance - transferAmount,
      },
      [toUserKey]: {
        ...prevUsers[toUserKey],
        balance: prevUsers[toUserKey].balance + transferAmount,
      },
    }));

    // Reset form fields (optional)
    setFromAccount('');
    setToAccount('');
    setAmount('');
    setDescription('');

    console.log('Transfer completed');
  };

  return (
    <Layout user={user}>
      <Header>Transfer Page</Header>
      
      <div className="transfer-container">
        <h2>Make a Transfer</h2>
        <form onSubmit={handleTransfer}>
          <div className="form-group">
            <label htmlFor="fromAccount">From Account</label>
            <select
              id="fromAccount"
              value={fromAccount}
              onChange={(e) => setFromAccount(e.target.value)}
              required
            >
              <option value="" disabled>Select your account</option>
              {Object.keys(users).map((key) => (
                <option key={key} value={users[key].accountNumber}>
                  {users[key].name} - ₱{users[key].balance.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="toAccount">To Account</label>
            <select
              id="toAccount"
              value={toAccount}
              onChange={(e) => setToAccount(e.target.value)}
              required
            >
              <option value="" disabled>Select recipient's account</option>
              {Object.keys(users).map((key) => (
                <option key={key} value={users[key].accountNumber}>
                  {users[key].name} - ₱{users[key].balance.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount to transfer"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
          Transfer Money
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Transfer;
