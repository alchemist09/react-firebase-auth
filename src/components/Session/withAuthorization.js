import React, { Component } from 'react'

const withAuthorization = () => Component => {
  class withAuthorization extends Component {
    render() {
      return (
        <Component {...this.props} />
      );
    }
  }
  return withAuthorization;
}

export default withAuthorization;