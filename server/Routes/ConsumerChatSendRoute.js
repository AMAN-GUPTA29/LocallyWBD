const {consumerSendMessage} = require("../Controllers/ConsumerSendMesseageController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.post("/",authenticateToken,consumerSendMessage)

module.exports = router;