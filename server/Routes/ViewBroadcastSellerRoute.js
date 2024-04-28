const {viewBroadcastController} = require("../Controllers/ViewBroadCastSellerController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.get("/",authenticateToken,viewBroadcastController)

module.exports = router;