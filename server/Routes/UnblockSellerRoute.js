const {unblockSellerController} = require("../Controllers/UnblockSellerController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.post("/",authenticateToken,unblockSellerController)

module.exports = router;