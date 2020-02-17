import React from 'react';
import { withAuthorization } from '../Session';

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Home page is only accessible to authenticated users</p>
  </div>
);

const condition = authUser => authUser !== null

export default withAuthorization(condition)(Home);