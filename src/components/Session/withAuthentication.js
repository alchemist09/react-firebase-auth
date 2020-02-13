import React from 'react';

const withAuthentication = Component => {
  return class withAuthentication extends React.Component {
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }
}

export default withAuthentication;