import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'; //importing the automatic time and date
import Layout from '../layouts/Layout';

function Home({ user }) {

  return (
    <Layout user={user}>
      <Header>THIS IS A TEST PAGE</Header>


      <div className="account-info">
        <div className="account-left">
          <h2>Account balance </h2>
          <p>Hello</p>
          <p>Savings Account (Peso)</p>
          <p>1000</p>
        </div>
        <div className="account-right">
          <h2>₱3000</h2>

          <div className="admin-actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>

        </div>
      </div>


    </Layout>

  );
}

export default Home;