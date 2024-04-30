const router = require("express").Router();
const { consumerPaymentController } = require("../Controllers/ConsumerPaymentController");
const {authenticateToken}=require('../Middleware/CheckTokenLocally');



router.post("/",authenticateToken,consumerPaymentController)

module.exports = router;