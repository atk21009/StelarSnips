const passport = require("passport");
const mongoose = require("mongoose");

module.exports = (app) => {
  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.post("/auth/login", passport.authenticate("local-login"), (req, res) => {
    res.redirect("/");
  });

  app.post(
    "/auth/signup",
    passport.authenticate("local-signup"),
    (req, res) => {
      res.redirect("/");
    }
  );
};
