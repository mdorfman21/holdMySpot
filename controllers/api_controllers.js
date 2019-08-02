const EventModel = require("../models/EventsModel");
const UserModel = require('../models/UserModel');

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
    }, (err, dbEvent) => {
      if (err) {
        console.log(err);
      }
      console.log('completed!');
      res.json(dbEvent);
    });

  },

  createUser: function(req, res) {
    console.log(req.body);
    const user = req.body;

    UserModel.findOneAndUpdate( req.body.email, {$set:{ ...user , isEmployee: false }}, { new: true, upsert: true, useFindAndModify: false }, (err, dbUser) => {
      if (err) {
        console.log(err);
      }
      console.log(`completed!`);
      res.json(dbUser);
    });
  }
};
