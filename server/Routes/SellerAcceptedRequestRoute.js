const router = require("express").Router();
const {  SellerAcceptedRequestController } = require("../Controllers/SellerAcceptedRequestController");
const { authenticateToken } = require('./../Middleware/CheckTokenSellerLocally')

router.get("/:id", authenticateToken, SellerAcceptedRequestController)

module.exports = router;