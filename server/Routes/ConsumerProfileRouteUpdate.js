const { consumerProfileUpdateController } = require("../Controllers/ConsumerProfileUpdateController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.put("/",authenticateToken,consumerProfileUpdateController)

module.exports = router;