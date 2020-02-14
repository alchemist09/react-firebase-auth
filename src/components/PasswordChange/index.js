import React, { Component } from 'react';

class PasswordChangeForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      password_one: '',
      password_two: '',
      error: null
    }
  }

  render() {
    const { password_one, password_two} = this.state;
    return (
      <form>
        <input 
          type="password"
          name="password_one"
          value={password_one}
          placeholder="Enter Password"
        />
        <input
          type="password"
          name="password_two"
          value={password_two}
          placeholder="Confirm Password"
        />
        <button type="submit">Change Password</button>
      </form>
    );
  }
}

export default PasswordChangeForm;