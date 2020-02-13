import React from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import HomePage from '../Home';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import PasswordForgetPage from '../PasswordForget';
import AdminPage from '../Admin';
import AccountPage from '../Account';

import * as ROUTES from '../../constants/routes';


const App = () => (
  <Router>
    <Navigation />
    <hr />

    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route path={ROUTES.HOME} component={HomePage} />
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    <Route path={ROUTES.ADMIN} component={AdminPage} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
  </Router>
);

export default App;