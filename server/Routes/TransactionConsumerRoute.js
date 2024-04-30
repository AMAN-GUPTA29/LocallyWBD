const router = require("express").Router();
const { TransactionConsumerController } = require("../Controllers/CheckTransactionConsumerController");
const { authenticateToken } = require('./../Middleware/CheckTokenLocally')

router.get("/",authenticateToken,  TransactionConsumerController)

module.exports = router;