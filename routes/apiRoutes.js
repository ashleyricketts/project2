var db = require("../models");

module.exports = function(app) {

  // get all the events
  app.get("/api/events", function(req, res) {
    db.Events.findAll({
      include: [db.Users]
    }).then(function(events) {
      res.json(events);
    });
  });

  // Get all users, include join
  app.get("/api/users", function(req, res) {
    db.Users.findAll({
      include: [db.Events]
    }).then(function(users) {
      res.json(users);
    });
  });

  // Create a new user
  app.post("/users", function(req, res) {
    db.Users.create(req.body).then(function(newUser) {
      res.json(newUser);
    });
  });

  //create a new event

  app.post("/events", function(req, res) {
    db.Events.create(req.body).then(function(newUser) {
      res.json(newUser);
    });
  });

  // Delete an example by id
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(users) {
      res.json(users);
    });
  });
};
