const router = require("express").Router();
const { GetService_SellerDetailsController } = require("../Controllers/GetService_SellerDetailsController");

// Unristriceted Access
router.get("/:id", GetService_SellerDetailsController)

module.exports = router;