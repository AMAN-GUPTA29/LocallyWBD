const { sellerDeleteController } = require("../Controllers/AdminBlockSeller");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.post("/",authenticateToken,sellerDeleteController)

module.exports = router;