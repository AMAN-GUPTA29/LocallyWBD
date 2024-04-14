const { sellerDeleteController } = require("../Controllers/AdminBlockSeller");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.delete("/",authenticateToken,sellerDeleteController)

module.exports = router;