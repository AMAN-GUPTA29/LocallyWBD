const router = require("express").Router();
const {  SellerDeleteRequestController } = require("../Controllers/SellerDeleteRequestController");
const { authenticateToken } = require('./../Middleware/CheckTokenSellerLocally')

router.delete("/:id", authenticateToken, SellerDeleteRequestController)

module.exports = router;