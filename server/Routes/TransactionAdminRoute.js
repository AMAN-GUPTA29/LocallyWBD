const router = require("express").Router();
const { TransactionAdminController } = require("../Controllers/CheckTransactionAdminController");
const { authenticateToken } = require('./../Middleware/CheckTokenAdminLocally')

router.get("/",authenticateToken,TransactionAdminController)

module.exports = router;