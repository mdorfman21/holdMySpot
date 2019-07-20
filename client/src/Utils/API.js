import axios from 'axios';

export default {
  createEvent: function(event) {
    return axios.post('/create/event', event);
  }
};