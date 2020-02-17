import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization, AuthUserContext } from '../Session';

const AccountPage = () => (
  <div>
    <h1>Account</h1>
    <AuthUserContext.Consumer>
      {
        authUser => <p>Current User: {authUser.email}</p>
      }
      <PasswordChangeForm />
      <PasswordForgetForm />
    </AuthUserContext.Consumer>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);