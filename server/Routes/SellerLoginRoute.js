const router = require("express").Router();
const { sellerloginController } = require("../Controllers/SellerLoginController");

router.post("/", sellerloginController)

module.exports = router;