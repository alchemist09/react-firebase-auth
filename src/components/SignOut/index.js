import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  error: ''
}

class SignOutButtonBase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...INITIAL_STATE
    }

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    this.props.firebase.doSignOut()
      .then(this.props.history.push(ROUTES.SIGN_IN))
      .catch(error => {
        this.setState({ error });
      })
  }

  render() {
    const { error } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.handleSignOut}>Sign Out</button>
        { error && <p>{error.message}</p>}
      </React.Fragment>
    );
  }
}

const SignOutButton = compose(
  withFirebase,
  withRouter
)(SignOutButtonBase);

export default SignOutButton;