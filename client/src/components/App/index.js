import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import Dashboard from '../Dashboard';
import AccountPage from '../Account';
import AnalyticsPage from '../Analytics';
import CalendarPage from '../Calendar';
import AboutUsPage from '../AboutUs';
import withAuthentication from '../Session/withAuthentication';
import './App.css';

const App = () =>
  <Router>
    <div className="app">
      <Route exact path={'/landing'} component={() => <LandingPage />} />
      <Route exact path={'/signup'} component={() => <SignUpPage />} />
      <Route exact path={'/'} component={() => <SignInPage />} />
      <Route exact path={'/aboutus'} component={() => <AboutUsPage />} />
      <Route exact path={'/pw-forget'} component={() => <PasswordForgetPage />} />
      <Route exact path='/dashboard' component={() => <Dashboard /> } />
      <Route exact path={'/account'} component={() => <AccountPage />} />
      <Route exact path={'/analytics'} component={() => <AnalyticsPage />} />
      <Route exact path={'/calendar'} component={() => <CalendarPage />} />
    </div>
  </Router>

export default withAuthentication(App);
