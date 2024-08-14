import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; //importing the automatic time and date
import Layout from '../layouts/Layout';

function Budget({ user }) {


  return (
    <div>
          <Layout user={user}>
        <Header>Budget Page</Header>
        </Layout>
    </div>
  );
}

export default Budget;