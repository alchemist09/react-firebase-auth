import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class AdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      users: []
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.firebase.getAllUsers().on('value', snapshot => {
      const user_data = snapshot.val();
      const user_list = Object.keys(user_data).map(key => ({
        ...user_data[key],
        uid: key
      }));

      this.setState({
        isLoading: false,
        users: user_list
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.getAllUsers().off();
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>
        <p>Only users with Admin Privileges can access the Admin Page </p>
        <UsersList users={this.state.users} />
       </div>
    );
  } 
}

const UsersList = ({ users }) => (
  <ul>
    {
      users.map(curr_user => (
        <li key={curr_user.uid}>
          <span><strong>Username: </strong>{curr_user.username}</span>
          <br />
          <span><strong>Email:</strong>{curr_user.email}</span>
          <br />
          <span><strong>User ID: </strong>{curr_user.uid}</span>
        </li>
      ))
    }
  </ul>
);

export default withFirebase(AdminPage);