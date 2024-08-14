import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; //importing the automatic time and date
import Layout from '../layouts/Layout';

function Transfer({ user }) {
  return (
    <div>
      <Layout user={user}>
        <Header>Transfer Page</Header>
      </Layout>
    </div>
  );
}

export default Transfer;