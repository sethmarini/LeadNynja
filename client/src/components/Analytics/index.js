import React from 'react';
import LeadChart from './Chart'
import MenuAppBar from '../MaterialComponents/MenuAppBar';
import './Analytics.css'

const AnalyticsPage = () =>
    <div>
        <MenuAppBar />
        <h1>Analytics</h1>
            <div className="row">
                <div className="col">
                    <div className="container-fluid p-3">
                    <LeadChart />
                    </div>
                </div>
            </div>    
    </div>

export default AnalyticsPage;