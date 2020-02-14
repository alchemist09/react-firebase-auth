import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  error: null
}

class PasswordForgetFormBase extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    const { email, error } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => this.setState({ ...INITIAL_STATE }))
      .catch(() => this.setState({ error }));
    
    evt.preventDefault();
  }

  render() {
    const { email, error } = this.state;
    const inValid = email === '';

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={this.handleInputChange}
          placeholder="Enter Your Email Address"
          value={email}
        />
        <button disabled={inValid} type="submit">Reset Password</button>
        <p>{error && error.message}</p>
      </form>
    );
  }
}

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

const PasswordForgetPage = () => (
  <div>
    <h1>Reset Password</h1>
    <PasswordForgetForm />
  </div>
);

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };