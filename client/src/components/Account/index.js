import React from 'react';
import AuthUserContext from '../Session/AuthUserContext';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';


const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account</h1>
        
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
          <h2>Email: {authUser.email}</h2>
            <PasswordChangeForm />
          </div>
          <div className='col-md-3'></div>
        </div>
        
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);