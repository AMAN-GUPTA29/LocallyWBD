const {unblockConsumerController} = require("../Controllers/UnblockConsumerController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.post("/",authenticateToken,unblockConsumerController)

module.exports = router;