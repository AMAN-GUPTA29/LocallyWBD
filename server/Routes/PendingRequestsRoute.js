const router = require("express").Router();
const { PendingRequestController } = require("../Controllers/PendingRequestController");
const { authenticateToken } = require('./../Middleware/CheckTokenLocally')

router.get("/", authenticateToken, PendingRequestController)

module.exports = router;