import React, { Component } from 'react';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';


const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
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
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form className="form-group" onSubmit={this.onSubmit}>
      <div className="jumbotron">
        <h3 className="display-4">Change Password</h3>
        <div className="form-group">
          <input
            className="form-control"
            value={passwordOne}
            onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
            type="password"
            placeholder="New Password"
          />
          </div>
          <div className="form-group">
          <input
            className="form-control"
            value={passwordTwo}
            onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm New Password"
          />
          </div>
        <button className="btn btn-primary" disabled={isInvalid} type="submit">
          Reset My Password
        </button>
        <Link to={'/dashboard'}>
            <button className="btn btn-outline-primary m-1" type="button">Back</button>
        </Link>
        </div>


        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default PasswordChangeForm;