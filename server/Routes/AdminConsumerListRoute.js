const { adminConsumerListController } = require("../Controllers/AdminConsumerListController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.get("/",authenticateToken,adminConsumerListController)

module.exports = router;