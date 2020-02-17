import React, { Component } from 'react'

const withAuthorization = () => Component => {
  class WithAuthorization extends Component {
    render() {
      return (
        <Component {...this.props} />
      );
    }
  }
  return WithAuthorization;
}

export default withAuthorization;