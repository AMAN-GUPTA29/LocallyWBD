const {viewBroadcastController} = require("../Controllers/ViewBroadCastConsumerController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.get("/",authenticateToken,viewBroadcastController)

module.exports = router;