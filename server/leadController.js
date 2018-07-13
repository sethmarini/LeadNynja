var Lead = require("./Lead");

module.exports = {
  // this method handles finding all leads in the db 
//   object syntax-using key value pairs
   find: function(req, res) {
    Lead.find().then(function(leads) {
      res.json(leads);
    }).catch(function(err) {
      res.json(err);
    });
   },

  insert: function(req, res) {
    Lead.create(req.body).then(function(data) {
      res.json(data);
    }).catch(function(err) {
      res.json(err);
    });
  },

  delete: function(req, res) {
    Lead.remove({
      _id: req.params.id
    }).then(function(article) {
      res.json(article);
    }).catch(function(err) {
      res.json(err);
    });
  }
};