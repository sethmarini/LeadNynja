import React from 'react';
import AuthUserContext from '../Session/AuthUserContext';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';


const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);