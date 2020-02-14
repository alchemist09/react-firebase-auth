import React, { Component } from 'react';

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
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    const { password_one, password_two} = this.state;
    return (
      <form>
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
          onChange={this.onChange}
          placeholder="Confirm Password"
        />
        <button type="submit">Change Password</button>
      </form>
    );
  }
}

export default PasswordChangeForm;