import React from 'react';
import Layout from '../layouts/Layout';

function Administrator({ user }) {
  return (
    <div>
      <Layout user={user}>
        <h1>Admin Page</h1>
      </Layout>
    </div>
  );
}

export default Administrator;