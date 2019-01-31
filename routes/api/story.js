// import express Router and the book controller
const router = require("express").Router();
const storyController = require("../../controllers/story");

// routes using "/api/story"
router
  .route("/")
  .get(storyController.findAll)
  .post(storyController.create);

// routes using "/api/story/:author"
router
  .route("/:author")
  .get(storyController.findByUser);


router
  .route("/co:collabAuthor")
  .get(storyController.findByCollab);

// routes using "/api/story/:id"
router
  .route("/:id")
  .get(storyController.findById)
  .put(storyController.update)
  .delete(storyController.remove);

module.exports = router;