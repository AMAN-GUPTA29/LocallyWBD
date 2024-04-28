const {makeBroadcastController} = require("../Controllers/MakeBroadcastController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.post("/",authenticateToken,makeBroadcastController)

module.exports = router;