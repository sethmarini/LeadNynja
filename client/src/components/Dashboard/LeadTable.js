// use index.html file to make components file
import React, { Component } from 'react';
import leadApi from '../../util/leadApi';

class LeadTable extends Component {
  state = {
    leads:[]
  }
  componentDidMount(){
    this.getSavedLeads();
  }
  // this is to get all the articles from the DB
  getSavedLeads = () => {
    leadApi.getLead().then(res => {
      this.setState({ leads: res.data });
    });
  };
// this is to delete articles from the DB
  deleteLead = id => {
    leadApi.deleteLead(id)
      .then(this.getSavedLeads());
  };
  createLeadRows = () => {
    return this.state.leads.map(lead => (
      <tr key= {lead._id}>
        <td>{lead.firstName}</td>
        <td>{lead.lastName}</td>
        <td>{lead.street}</td>
        <td>{lead.city}</td>
        <td>{lead.state}</td>
        <td>{lead.zip}</td>
        <td>{lead.propertyValue}</td>
        <td>{lead.loanAmount}</td>
        <td>{lead.phone}</td>
        <td>{lead.email}</td>
        <td><i className="fa fa-trash" onClick={() => {
        this.deleteLead(lead._id)
        }}></i></td>
      </tr>
    ));
  };
  
  render() {
      return (
        <div className="saved">
          <div className="row">
            <div className="col-sm-12">
              <br />
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <strong><i className="fa fa-table"></i>Saved Leads</strong>
                  </h3>
                </div>
                <div className="panel-body" id="well-section"> 
                  <table className="table">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th> 
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Property Value</th>
                        <th>Loan Amount</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      { this.createLeadRows() }
                    </tbody>
                  </table>
                </div> 
              </div>
            </div>
          </div>
        </div>
    
      );
    }
  }
  
  export default LeadTable;