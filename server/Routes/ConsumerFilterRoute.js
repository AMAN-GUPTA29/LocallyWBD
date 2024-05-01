const { ConsumerFilterController } = require("../Controllers/ConsumerFilterController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');

router.get("/:filter_details",authenticateToken,ConsumerFilterController)

module.exports = router;