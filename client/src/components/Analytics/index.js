import React from 'react';
import LeadChart from './Chart'
import MenuAppBar from '../1Material/MenuAppBar';

const AnalyticsPage = () =>
    <div>
    <MenuAppBar />
    <div className="row">
        <div className="col-md-1">
        </div>
        <div className="col-md-11">
            <div className="container-fluid">
            <LeadChart />
            </div>
        </div>
    </div>    
    </div>

export default AnalyticsPage;