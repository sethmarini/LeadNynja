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
    events: []
  }

  componentDidMount(){
    this.getSavedEvents();
  }

  // this is to get all the articles from the DB
  getSavedEvents = () => {
    eventApi.getEvent().then(res => {
      this.setState({ events: res.data });
    });
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
  // use javascript date constructor to create a valid date 
    let start = new Date(Date.parse(document.getElementById("date").value + " " + document.getElementById("time").value))
  eventApi.saveEvent({
    title: document.getElementById("event").value,
    start: start,
    // day in seconds
    end: new Date(Date.parse(start) + 86400000)
  });
  this.getSavedEvents();
}

  render() {
    console.log(this.state.events);
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