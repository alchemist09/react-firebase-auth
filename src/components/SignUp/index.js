import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleSubmit(evt) {

  }

  handleInputChange(evt) {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
      
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)
export { SignUpForm, SignUpLink }

export default SignUpPage;