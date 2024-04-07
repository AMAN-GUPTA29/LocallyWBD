const { sellerProfileViewController } = require("../Controllers/SellerProfileViewController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenSellerLocally');


router.get("/",authenticateToken,sellerProfileViewController)

module.exports = router;