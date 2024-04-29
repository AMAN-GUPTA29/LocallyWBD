const {sellerServiceDataOptedByConsumer} = require("../Controllers/ServiceInfoConsumerController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.post("/",authenticateToken,sellerServiceDataOptedByConsumer)

module.exports = router;