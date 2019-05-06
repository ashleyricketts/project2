var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });
  // Get all events
  app.get("/api/events", function(req, res) {
    db.Users.findAll({}).then(function(eventData) {
      res.json(eventData);
    });
  });

  // Create a new user
  app.post("/users", function(req, res) {
    db.Users.create(req.body).then(function(newUser) {
      res.json(newUser);
    });
  });

  // Create a new event
  app.post("/events", function(req, res) {
    db.Users.create(req.body).then(function(newEvent) {
      res.json(newEvent);
    });
  });

  // Delete an user by id
  app.delete("/api/users/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
