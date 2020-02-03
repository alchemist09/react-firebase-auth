import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm />
  </div>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(evt) {

  }

  handleInputChange(evt) {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
      
      </form>
    )
  }
}

export default SignUpPage;