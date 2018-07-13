var Event = require("./Event");

module.exports = {
  // this method handles finding all leads in the db 
//   object syntax-using key value pairs
   find: function(req, res) {
    Event.find().then(function(events) {
      res.json(events);
    }).catch(function(err) {
      res.json(err);
    });
   },

  insert: function(req, res) {
    Event.create(req.body).then(function(data) {
      res.json(data);
    }).catch(function(err) {
      res.json(err);
    });
  },

  delete: function(req, res) {
    Event.remove({
      _id: req.params.id
    }).then(function(event) {
      res.json(event);
    }).catch(function(err) {
      res.json(err);
    });
  }
};