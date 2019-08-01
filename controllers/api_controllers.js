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
    })
      .then(dbEvent => {
        console.log(dbEvent);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },

  createUser: function(req, res) {
    console.log(req.body);
    const userEmail = req.body.email;
    let isEmployee = false;
    const user = req.body;

    // UserModel.findOneAndUpdate( { userEmail }, { user , isEmployee }, { new: true, upsert: true })
    // .then(dbUser => {
    //   console.log(dbUser);
    // }).catch(err => {
    //   res.status(500).json(err);
    // });

    UserModel.create( {...user, isEmployee: false} )
    .then(dbUser => {
      console.log(dbUser);
    }).catch(err => {
      res.status(500).json(err);
    });
  }
};
