const {checkSellerHistory} = require("../Controllers/CheckHistorySellerController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenSellerLocally');


router.get("/",authenticateToken,checkSellerHistory)

module.exports = router;