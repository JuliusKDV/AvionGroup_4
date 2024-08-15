import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'; //importing the automatic time and date
import Layout from '../layouts/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

function Transfer({ user }) {
  return (

    <Layout user={user}>
      <Header>Transfer Page</Header>
      <div className="transfer">
        <div className="transfer-options"> 
          <FontAwesomeIcon icon={faMoneyBillTransfer} size="6x" />
          <h2>Internal transfer</h2>
          </div>
        <div className="transfer-options"> 
          <FontAwesomeIcon icon={faMagnifyingGlassDollar} size="6x" />
          <h2>External transfer</h2>
        </div>
      </div>
    </Layout>

  );
}

export default Transfer;