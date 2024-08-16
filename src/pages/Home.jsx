import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Components/Header'; //importing the automatic time and date
import Layout from '../layouts/Layout';

function Home({ user }) {

  return (
    <Layout user={user}>
      <Header>THIS IS A TEST PAGE</Header>


    </Layout>

  );
}

export default Home;