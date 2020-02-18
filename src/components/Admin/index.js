import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class AdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      users: {}
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.firebase.getAllUsers().on('value', snapshot => {
      this.setState({
        isLoading: false,
        users: snapshot.val()
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>
        <p>Only users with Admin Privileges can access the Admin Page </p>
       </div>
    );
  } 
}

export default withFirebase(AdminPage);