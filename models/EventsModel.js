const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventName: String,
  address: String,
  estimatedWaitTime: Number,
  owner: String,
});

const EventInfo = mongoose.model("EventInfo", EventSchema);

module.exports = EventInfo;
