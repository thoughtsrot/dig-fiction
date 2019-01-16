// import api routes and express router
const router = require("express").Router();
const apiRoutes = require("./api");

// prefix route endpoints with "/api"
router.use("/api", apiRoutes);

// export routes
module.exports = router;