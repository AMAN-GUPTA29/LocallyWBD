const router = require("express").Router();
const { pendingServiceDeleteRequest } = require("../Controllers/ConsumerDeletePendingrequestController");
const { authenticateToken } = require('./../Middleware/CheckTokenLocally')

router.delete("/", authenticateToken, pendingServiceDeleteRequest)

module.exports = router;