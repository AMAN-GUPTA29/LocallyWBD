const { ConsumerTransactionFilterController } = require("../Controllers/ConsumerTransactionFilterController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');

router.get("/:startDate/:endDate",authenticateToken,ConsumerTransactionFilterController)

module.exports = router;