const EventModel = require("../models/EventsModel");

module.exports = {
  createEvent: function(req, res) {
    console.log(req.body);

    const eventName = req.body.eventName;
    const address = req.body.address;
    const estimatedWaitTime = req.body.estimatedWaitTime;

    EventModel.create({
      eventName,
      address,
      estimatedWaitTime
    })
      .then(dbEvent => {
        console.log(dbEvent);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
