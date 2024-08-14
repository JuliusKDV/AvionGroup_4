import React from 'react';
import Header from '../components/Header'; //importing the automatic time and date
import Layout from '../layouts/Layout';

function Administrator({ user }) {
  return (
    <div>
      <Layout user={user}>
        <Header>Admin page</Header>
      </Layout>
    </div>
  );
}

export default Administrator;