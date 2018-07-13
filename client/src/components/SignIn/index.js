import React, { Component } from 'react';
import './SignIn.css';
import { Link, withRouter } from 'react-router-dom';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import logo from '../Images/logo.svg'; 

const SignInPage = ({ history }) =>
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
              <h3 className="display-4">Sign In</h3>
              <SignInForm history={history} />
              <PasswordForgetLink />
              <SignUpLink />
              <p>Learn more: <Link to={'/aboutus'}>About Us</Link></p>
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
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push('/dashboard');
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form className="form-group" onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            value={email}
            onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            value={password}
            onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="btn btn-primary" disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p id="errMSG">{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
