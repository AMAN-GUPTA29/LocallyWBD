const { adminSellerListController } = require("../Controllers/AdminSellerListController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.get("/",authenticateToken,adminSellerListController)

module.exports = router;