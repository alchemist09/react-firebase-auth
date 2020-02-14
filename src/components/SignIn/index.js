import React, { Component } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { SignUpLink } from '../SignUp';
import * as ROUTES from '../../constants/routes';

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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      }) 
    evt.preventDefault();
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = email === '' || password === '';
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="email"
          type="text" 
          placeholder="Email Address" 
          onChange={this.handleInputChange} 
          value={email} 
        />
        <input 
          name="password"
          type="password" 
          placeholder="Password" 
          onChange={this.handleInputChange} 
          value={password} 
        />
        <button disabled={isInvalid} type="submit">Sign In</button>
        { error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignInForm = compose(
  withFirebase,
  withRouter
)(SignInFormBase)

const SignInPapge = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

export default SignInPapge;