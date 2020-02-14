import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

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
    const { email} = this.state;
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

export default PasswordForgetPage;