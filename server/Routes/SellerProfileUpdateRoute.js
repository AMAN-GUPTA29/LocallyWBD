const { sellerProfileUpdateController } = require("../Controllers/SellerProfileUpdateController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenSellerLocally');


router.put("/",authenticateToken,sellerProfileUpdateController)

module.exports = router;