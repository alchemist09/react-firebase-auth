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

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    console.log("handleInputChange() called......");
    console.log(evt.target.name, ': ', evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
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