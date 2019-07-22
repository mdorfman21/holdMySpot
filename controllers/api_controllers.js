const EventModel = require("../models/EventsModel");

module.exports = {
  createEvent: function(req, res) {
    console.log(req.body);

    const eventName = req.body.eventName;

    EventModel.create({
      eventName
    })
      .then(dbEvent => {
        console.log(dbEvent);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
