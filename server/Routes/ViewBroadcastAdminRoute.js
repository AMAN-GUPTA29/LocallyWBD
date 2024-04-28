const {viewBroadcastController} = require("../Controllers/ViewBroadCastAdminController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.get("/",authenticateToken,viewBroadcastController)

module.exports = router;