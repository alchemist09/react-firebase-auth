import React, { Component } from 'react';


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

  render() {
    const { email} = this.state;
    return (
      <form>
        <input
          type="text"
          name="email"
          onChange={this.handleInputChange}
          placeholder="Enter Your Email Address"
          value={email}
        />
        <button type="submit">Reset Password</button>
      </form>
    );
  }
}

export default PasswordForgetFormBase;