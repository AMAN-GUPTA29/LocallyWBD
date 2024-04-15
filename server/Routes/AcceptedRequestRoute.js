const router = require("express").Router();
const { AcceptedRequestController } = require("../Controllers/AcceptedRequestController");
const { authenticateToken } = require('./../Middleware/CheckTokenLocally')

router.get("/", authenticateToken, AcceptedRequestController)

module.exports = router;