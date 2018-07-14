var mongoose = require("mongoose");
// This allows new schema objects to be created
var Schema = mongoose.Schema;
// this creates the database
// Event needs a title, a start, and an end instead of event, date, and time
var eventSchema = new Schema({
    title: String,
    start: String,
    end: String,
});
// this allows interaction with the database
var Events = mongoose.model("Event", eventSchema);

module.exports = Events;