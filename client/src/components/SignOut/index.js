import React from 'react';
import { auth } from '../../firebase';

const SignOutButton = () =>
  <button className="btn btn-danger" type="button" onClick={auth.doSignOut}>Sign out</button>

export default SignOutButton;
