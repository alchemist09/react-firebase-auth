import React, { Component } from 'react';

const  INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    }
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    )
  }
}

const SignInPapge = () => (
  <div>
    <h1>Sign In</h1>
    <SignInFormBase />
  </div>
);

export default SignInPapge;