// axios is used for rest api's
import axios from 'axios';
// this is to make it easier to get, save, and delete leads.
const eventApi = {
  getEvent: function() {
    return axios.get("/api/event");
  },
  // Saves a new lead to the db
  saveEvent: function(eventObj) {
    return axios.post("/api/event", eventObj);
  },
  // Deletes lead from the db
  deleteEvent: function(id) {
    return axios.delete(`/api/event/${id}`);
  }
};

export default eventApi