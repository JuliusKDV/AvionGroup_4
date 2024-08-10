import React from 'react';
import Layout from '../layouts/Layout';

function Home({ user }) {
  return (
    <div>
      <Layout user={user}>
        <h1>Home Page</h1>
      </Layout>
    </div>
  );
}

export default Home;