const { consumerGivenSellerReview } = require("../Controllers/ConsumerRatingController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.post("/",authenticateToken,consumerGivenSellerReview)

module.exports = router;