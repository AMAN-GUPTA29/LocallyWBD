const router = require("express").Router();
const { SellerViewCustomerRequestController } = require("../Controllers/SellerViewCustomerRequestController");
const { authenticateToken } = require('./../Middleware/CheckTokenSellerLocally')

router.get("/", authenticateToken, SellerViewCustomerRequestController)

module.exports = router;