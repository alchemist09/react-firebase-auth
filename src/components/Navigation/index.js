import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';

const Navigation = ({ auhtUser }) => (
  <div>{auhtUser ? <NavigationAuth /> : <NavigationNoAuth />}</div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link> 
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link> 
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link> 
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link> 
    </li>
    <li>
        <SignOutButton />
    </li>
  </ul>
)

const NavigationNoAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
)

export default Navigation;