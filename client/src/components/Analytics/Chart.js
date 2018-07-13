// use index.html file to make components file
import React, { Component } from 'react';
import leadApi from '../../util/leadApi';
import { Bar } from 'react-chartjs-2'
import './Analytics.css'

class LeadChart extends Component {
  state = {
    leads:[]
  }
  
  componentDidMount(){
    this.getSavedLeads();
  }
 
  getSavedLeads = () => {
    leadApi.getLead().then(res => {
      this.setState({ leads: res.data });
    });
  };

  displayLeads = () => {
    const data = {
        labels: [],
        datasets: [
          {
            label: 'Leads by Day',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
          }
        ]
      };
      for (var i=0; i< this.state.leads.length; i++) {
         console.log(i)
        var d = new Date(this.state.leads[i].timeStamp)
        var date = d.getDate()
        if(data.labels.includes(date)) {
            data.datasets[0].data[data.labels.indexOf(date)] += 1;
        } else {
            data.labels.push(date)
            data.datasets[0].data.push(1)
        }
        }
      return (
            <Bar
                data={data}
                options={{ maintainAspectRatio: false,
                    scales: {
						xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'July'
							}
						}],
						yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: '# of Leads'
							}
						}]
					},}}
            />
      )
  };
  
  render() {
      return (
          <div className="chart">
            {this.displayLeads()}
          </div>
      );
    }
  }
  
  export default LeadChart;