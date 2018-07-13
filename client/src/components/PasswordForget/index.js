import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import logo from '../Images/logo.svg'; 

const PasswordForgetPage = () =>
<div className="container-fluid h-100">
<div className="row h-100 colBlue">
  <div className="col-sm-6 my-auto text-center text-light colBlue">
    <img src={logo} alt=""/>
    <h4>We give the financial sector a simple solution to capture and distribute leads.</h4>
  </div>
  <div className="col-sm-6 colWhite h-100">
    <div className="row h-100">
      <div className="col my-auto">
        <div className="jumbotron m-5">
          <h3 className="display-4">Password Reset</h3>
          <PasswordForgetForm />
        </div>
      </div>
    </div>
  </div>
</div>
</div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (

      <form className="form-group" onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            value={this.state.email}
            onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
        </div>
          <button className="btn btn-primary" disabled={isInvalid} type="submit">
            Reset My Password
          </button>
          <Link to={'/'}>
            <button className="btn btn-outline-primary m-1" type="button">Back</button>
          </Link>

          { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to={'/pw-forget'}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
