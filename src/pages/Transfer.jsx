import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'; //importing the automatic time and date
import Layout from '../layouts/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

function Transfer({ user }) {
  return (

    <Layout user={user}>
      <Header>Transfer Page</Header>
      
    </Layout>

  );
}

export default Transfer;