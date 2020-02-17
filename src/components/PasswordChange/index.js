import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  password_one: '',
  password_two: '',
  error: null
}

class PasswordChangeForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    const { password_one } = this.state;
    this.props.firebase
      .doPasswordUpdate(password_one)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    evt.preventDefault();
  }

  render() {
    const { password_one, password_two, error } = this.state;
    const isInvalid = password_one !== password_two || password_one === "";
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="password"
          name="password_one"
          value={password_one}
          onChange={this.handleChange}
          placeholder="Enter Password"
        />
        <input
          type="password"
          name="password_two"
          value={password_two}
          onChange={this.handleChange}
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">Change Password</button>
        <p>{ error && error.message}</p>
      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);