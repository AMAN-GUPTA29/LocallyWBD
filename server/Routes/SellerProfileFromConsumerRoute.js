const { sellerProfilefromConsumer } = require("../Controllers/GetSellerProfileConsumerSideController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.get("/",authenticateToken,sellerProfilefromConsumer)

module.exports = router;