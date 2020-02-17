import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = () => (
  <div>
    <h1>Account</h1>
    <PasswordChangeForm />
    <PasswordForgetForm />
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);