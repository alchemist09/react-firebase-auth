import React from 'react'
import { withRouter } from 'react-router-dom';
import { withAuthentication } from './index';
import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes';

const withAuthorization = (condition) => Component => {
  class WithAuthorization extends React.Component {

    componentDidMount() {
      this.listener = this.props.firebase.auth
        .onAuthStateChange(authUser => {
          if(!condition(authUser)) {
            this.props.history.push(ROUTES.SIGN_IN);
          }
        });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  return compose(
    withRouter,
    withAuthentication
  )(WithAuthorization);
}

export default withAuthorization;