import React, { useState } from 'react';
import Header from '../Components/Header'; // Importing the automatic time and date
import Layout from '../layouts/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

function Transfer({ user }) {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    // Add logic to handle the transfer
    console.log('Transfer details:', {
      fromAccount,
      toAccount,
      amount,
      description,
    });
  };

  return (
    <Layout user={user}>
      <Header>Transfer Page</Header>
      
      <div className="transfer-container">
        <h2>Make a Transfer</h2>
        <form onSubmit={handleTransfer}>
          <div className="form-group">
            <label htmlFor="fromAccount">From Account</label>
            <input
              type="text"
              id="fromAccount"
              value={fromAccount}
              onChange={(e) => setFromAccount(e.target.value)}
              placeholder="Enter your account number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="toAccount">To Account</label>
            <input
              type="text"
              id="toAccount"
              value={toAccount}
              onChange={(e) => setToAccount(e.target.value)}
              placeholder="Enter recipient's account number"
              required
            />
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

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a description"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            <FontAwesomeIcon icon={faMoneyBillTransfer} /> Transfer Money
          </button>
        </form>
      </div>

    </Layout>
  );
}

export default Transfer;
