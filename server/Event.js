var mongoose = require("mongoose");
// This allows new schema objects to be created
var Schema = mongoose.Schema;
// this creates the database
var eventSchema = new Schema({
    event: String,
    date: String,
    time: String,
});
// this allows interaction with the database
var Events = mongoose.model("Event", eventSchema);

module.exports = Events;