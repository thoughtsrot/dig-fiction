// import api routes and express router
const router = require("express").Router();
const storyRoutes = require("./story");
const userRoutes = require('./users');

// prefix user routes with "/users"
router.use('/users', userRoutes);

// prefix story route endpoint with "/story"
router.use("/story", storyRoutes);

// export routes
module.exports = router;