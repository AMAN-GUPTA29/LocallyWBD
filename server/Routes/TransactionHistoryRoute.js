const router = require("express").Router();
const { TransactionController } = require("../Controllers/SaveTransactionHistory");
const { authenticateToken } = require('./../Middleware/CheckTokenLocally')

router.post("/",authenticateToken, TransactionController )

module.exports = router;