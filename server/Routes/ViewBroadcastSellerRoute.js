const {viewBroadcastController} = require("../Controllers/ViewBroadCastSellerController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenSellerLocally');


router.get("/",authenticateToken,viewBroadcastController)

module.exports = router;