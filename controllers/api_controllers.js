const EventModel = require("../models/EventsModel");
const UserModel = require("../models/UserModel");

module.exports = {
  createEvent: function(req, res) {
    console.log(req.body);

    const eventName = req.body.eventName;
    const address = req.body.address;
    const estimatedWaitTime = req.body.estimatedWaitTime;
    const owner = req.body.owner;
    const booked = req.body.booked;

    EventModel.create(
      {
        eventName,
        address,
        estimatedWaitTime,
        owner,
        booked
      },
      (err, dbEvent) => {
        if (err) {
          console.log(err);
        }
        console.log("completed!");
        res.json(dbEvent);
      }
    );
  },

  createUser: function(req, res) {
    console.log(req.body);
    const user = req.body;

    UserModel.findOneAndUpdate(
      req.body.email,
      { ...user, isEmployee: false },
      { new: true, upsert: true, useFindAndModify: false },
      (err, dbUser) => {
        if (err) {
          console.log(err);
        }
        console.log(`completed!`);
        res.json(dbUser);
      }
    );
  },

  getEvents: function(req, res) {
    EventModel.find({}, (err, dbEvents) => {
      if (err) {
        console.log(err);
      }
      console.log(`sent the events in the database!`);
      res.json(dbEvents);
    });
  },

  findAndUpdateEvent: function(req, res) {
    const _id = req.body._id;
    // const employee = req.body.employee._id;

    EventModel.findByIdAndUpdate({ _id }, { booked: true }, (err, dbEvent) => {
      if (err) {
        console.log(err);
      }
      console.log(`${dbEvent} has been updated`);
    });
  }
};
