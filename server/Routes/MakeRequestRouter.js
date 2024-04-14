const router = require("express").Router();
const { MakeRequestController } = require("../Controllers/MakeRequestController");
const { authenticateToken } = require('./../Middleware/CheckTokenLocally')

router.get("/:id", authenticateToken, MakeRequestController)

module.exports = router;