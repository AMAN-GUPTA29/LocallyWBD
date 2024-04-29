const { sellerProfilefromConsumer } = require("../Controllers/GetSellerProfileConsumerSideController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.post("/",authenticateToken,sellerProfilefromConsumer)

module.exports = router;