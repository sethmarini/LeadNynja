import React from 'react';
import MenuAppBar from '../MaterialComponents/MenuAppBar';
import CalendarChart from './Calendar'

const CalendarPage = () =>

    <div>
    <MenuAppBar />
    <h1>Calendar</h1>
        <div className="row">
            <div className="col">
                <div className="container-fluid p-3">
                    <CalendarChart/>
                </div>
            </div>
        </div>    
    </div>

export default CalendarPage;
