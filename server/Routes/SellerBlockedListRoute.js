const {sellerBlockedListController} = require("../Controllers/ViewBlockedSellerListController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.get("/",authenticateToken,sellerBlockedListController)

module.exports = router;