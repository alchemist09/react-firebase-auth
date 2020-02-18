import React, { Component } from 'react';

class AdminPage extends Component {

  render() {
    return (
      <div>
        <h1>Admin</h1>
        <p>Only users with Admin Privileges can access the Admin Page </p>
       </div>
    );
  } 
}

export default AdminPage;