const router = require("express").Router();
const { TransactionSellerController } = require("../Controllers/CheckTransactionSellerController");
const { authenticateToken } = require('./../Middleware/CheckTokenSellerLocally')

router.get("/",authenticateToken,  TransactionSellerController)

module.exports = router;