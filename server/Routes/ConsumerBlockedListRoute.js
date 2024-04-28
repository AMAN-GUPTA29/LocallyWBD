const {consumerBlockedListController} = require("../Controllers/ViewBlockedConsumerController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.get("/",authenticateToken,consumerBlockedListController)

module.exports = router;