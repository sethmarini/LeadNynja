import React, { Component } from 'react';
import './SignUp.css'
import { Link, withRouter } from 'react-router-dom';
import { auth, db } from '../../firebase';
import logo from '../Images/logo.svg'; 

const SignUpPage = ({ history }) =>
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
          <h3 className="display-4">Sign Up</h3>
          <SignUpForm history={history} />
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
  username: '',
  email: '',
  state: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      state,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        db.doCreateUser(authUser.user.uid, username, email, state)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push('/dashboard');
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });
    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      state,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      state === '' ||
      email === '';

    return (
      <form className="form-group" onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            value={username}
            onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
            type="text"
            placeholder="Full Name"
          />
         </div> 
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
            value={state}
            onChange={event => this.setState(updateByPropertyName('state', event.target.value))}
            type="text"
            placeholder="State"
          />
         </div>
         <div className="form-group"> 
          <input
            className="form-control"
            value={passwordOne}
            onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
            type="password"
            placeholder="Password"
          />
         </div>
         <div className="form-group"> 
          <input
            className="form-control"
            value={passwordTwo}
            onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"
          />
         </div> 
          <button className="btn btn-primary" disabled={isInvalid} type="submit">
            Sign Up
          </button>
          <Link to={'/'}>
            <button className="btn btn-outline-primary m-1" type="button">Back</button>
          </Link>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={'/signup'}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};