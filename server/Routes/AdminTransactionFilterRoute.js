const { AdminTransactionFilterController } = require("../Controllers/AdminTransactionFilterController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');

router.get("/:startDate/:endDate",authenticateToken,AdminTransactionFilterController)

module.exports = router;