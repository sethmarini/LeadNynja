// axios is used for rest api's
import axios from 'axios';
// this is to make it easier to get, save, and delete leads.
const leadApi = {
  getLead: function() {
    return axios.get("/api/lead");
  },
  // Saves a new lead to the db
  saveLead: function(leadObj) {
    return axios.post("/api/lead", leadObj);
  },
  // Deletes lead from the db
  deleteLead: function(id) {
    return axios.delete(`/api/lead/${id}`);
  }
};

export default leadApi