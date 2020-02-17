import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization, AuthUserContext } from '../Session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
  {
    authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordChangeForm />
        <PasswordForgetForm />
      </div>
    )
  }
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);