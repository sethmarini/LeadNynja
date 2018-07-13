import React, { Component } from 'react';
import withAuthorization from '../Session/withAuthorization';
import LeadTable from './LeadTable';
import MenuAppBar from '../1Material/MenuAppBar';

class HomePage extends Component {

  render() {

    return (
      <div>
        <MenuAppBar />
        <div className="row">
          <div className="col-md-1">
          </div>
          <div className="col-md-11">
              <div className="container-fluid">
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
