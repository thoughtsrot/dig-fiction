// import story model

const db = require('../models');

// export methods for editing/searching the Story collection

module.exports = {

   // find all stories ("/api/story" => GET)
   findAll: function(req, res) {

    db
      .Story
      .find(req.query)
      .sort({publishDate: -1})
      .then(dbStoryData => res.json(dbStoryData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  // find a story by id ("/api/story/:id")
  findById: function (req, res) {
    db.Story
      .findById(req.params.id)
      .then(dbStoryData => res.json(dbStoryData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  // create / insert new story ("/api/story" => POST)
  create: function (req, res) {

    // conditional for setting collab selection to boolean for backend

    (req.body.collab === "Yes") ? (req.body.collab = true) : (req.body.collab = false )
    db.Story
      .create(req.body)
      .then(dbStoryData => res.json(dbStoryData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  // update story information ("/api/story/:id" => PUT)
  update: function (req, res) {
    db.Story
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbStoryData => res.json(dbStoryData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  // to delete a story from the fiction list ("/api/story/:id" => DELETE)
  remove: function (req, res) {
    db.Story
      .findById(req.params.id)
      .then(dbStoryData => dbStoryData.remove())
      .then(dbStoryData => res.json(dbStoryData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  }
}