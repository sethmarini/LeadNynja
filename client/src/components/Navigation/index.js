import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';


const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
<div className="container">
  <div className="row">
  <Link to={'/dashboard'} test="test">Home</Link>
  </div>
  <div className="row">
  <Link to={'/analytics'}>Analytics</Link>
  </div>
  <div className="row">
  <Link to={'/calendar'}>Calendar</Link>
  </div>
  <div className="row">
    <Link to={'/landing'}>Landing</Link>
  </div>
  <div className="row">
  <Link to={'/account'}>Account</Link>
  </div>
  <div className="row">
    <SignOutButton />
  </div>
 </div> 
);

const NavigationNonAuth = () => (
  <div className="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </button>
    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a className="dropdown-item"><Link to={'/'}>Sign In</Link></a>
      <a className="dropdown-item"><Link to={'/'}>Landing</Link></a>
    </div>
  </div>
);

export default Navigation;
