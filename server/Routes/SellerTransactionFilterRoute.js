const { SellerTransactionFilterController } = require("../Controllers/SellerTransactionFilterController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenSellerLocally');

router.get("/:startDate/:endDate",authenticateToken,SellerTransactionFilterController)

module.exports = router;