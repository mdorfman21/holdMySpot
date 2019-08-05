import axios from "axios";

export default {
  createEvent: function(event) {
    return axios.post("/create/event", event);
  },

  createUser: function(user) {
    return axios.post("/create/user", user);
  },

  getEvent: function() {
    return axios.get("/events");
  },

  findAndUpdateEvent: function(eventAndEmployee) {
    return axios.put("/events", eventAndEmployee);
  }
};
