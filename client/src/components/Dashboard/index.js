import React, { Component } from 'react';
import withAuthorization from '../Session/withAuthorization';
import LeadTable from './LeadTable';
import MenuAppBar from '../MaterialComponents/MenuAppBar'
import  './Dashboard.css';

class HomePage extends Component {

  render() {

    return (
      <div>
        <MenuAppBar />
        <h1>Dashboard</h1>
        <div className="row">
          <div className="col">
              <div className="container-fluid p-3" m-2>
              <LeadTable />
              </div>
          </div>
        </div>    
      </div>
    );
  }
}
// Authuser
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
