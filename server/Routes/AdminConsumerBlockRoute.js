const { consumerDeleteController } = require("../Controllers/AdminBlockConsumer");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.post("/",authenticateToken,consumerDeleteController)

module.exports = router;