const {checkConsumerHistory} = require("../Controllers/CheckHistoryConsumerController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.get("/",authenticateToken,checkConsumerHistory)

module.exports = router;