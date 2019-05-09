var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    //If the user already has an account send them to the memebers page
    if(req.newUser) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });

  app.get("/login", function(req, res) {
    //If the doesn't have an account send them to the login page

    if (req.newUser) {
      res.redirect("/members");
    }

    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });

  //If a user who is not logged in tries to access this route they will be redirected
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  })

  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });
};
