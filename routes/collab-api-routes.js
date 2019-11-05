var db = require("../models");

module.exports = function(app) {
  app.get("/api/collabs", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Collab.findAll({
      include: [db.Post]
    }).then(function(dbCollab) {
      res.json(dbCollab);
    });
  });

  app.get("/api/collabs/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Collab.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbCollab) {
      res.json(dbCollab);
    });
  });

  app.post("/api/collabs", function(req, res) {
    db.Collab.create(req.body).then(function(dbCollab) {
      res.json(dbCollab);
    });
  });

  app.delete("/api/collabs/:id", function(req, res) {
    db.Collab.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCollab) {
      res.json(dbCollab);
    });
  });

};
