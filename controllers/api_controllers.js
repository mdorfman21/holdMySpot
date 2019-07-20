const Models = requrie('../models');

module.exports = {
  createEvent: function(req, res) {
    
    const eventName = req.body.eventName;

    Models.createEvent.create({
      eventName
    }).then(dbEvent => {
      console.log(dbEvent);
    }).catch(err => {
      res.status(500).json(err);
    });
  }
};