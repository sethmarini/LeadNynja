import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "./Calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import eventApi from "../../util/eventApi";
import CalDatePicker from './CalDatePicker'
import TimePickers from './TimePickers'

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const DnDCalendar = withDragAndDrop(Calendar);

//CALENDAR
class CalendarChart extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some Event"

        // event date time
        // start: new Date(),
        // end: new Date(moment().add(1, "days")),
        // title: "Some Event"
      }
    ]
  };

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
  };

  saveEvent = (e) =>{
    e.preventDefault();
  eventApi.saveEvent({
    event: document.getElementById("event").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value
});
}

  render() {
    return (
      <div className="CalendarPage">
      
        <div className="container">
        
        <div className= "row">
            <div className="col-md-4">
              <form>
                <div className="form-group"><label for="event">EVENT:</label>
                  <input type="text" className="form-control" id="event" placeholder="Conference Call" />
                </div> 

                <div className="form-group"><label for="date">DATE:</label>
                <CalDatePicker />
                 </div> 
                <div className="form-group"><label for="time">TIME:</label>
                 <TimePickers /> 
                </div>
              
                <button type="submit" onClick={e => this.saveEvent(e)}	className="btn btn-primary">Save Event</button>
              </form>
            </div> 
      

          {/* Calendar Start */}
            
            <div className="col-md-4">
              <DnDCalendar
                defaultDate={new Date()}
                defaultView="month"
                events={this.state.events}
                onEventDrop={this.onEventDrop}
                onEventResize={this.onEventResize}
                resizable
                style={{ height: "80vh", width: "80vh"}}
                />
              </div>
      </div>
      </div>
    </div>
    );
  }
}

export default CalendarChart;
