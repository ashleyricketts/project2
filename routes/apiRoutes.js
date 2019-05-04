var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res){
    res.render("index");
  });
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(users) {
      res.json(users);
    });
  });

  // Create a new example
  app.post("/users", function(req, res) {
    db.Users.create(req.body).then(function(newUser) {
      res.json(newUser);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
