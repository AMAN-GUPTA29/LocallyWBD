const {SellerReviewConsumerView} = require("../Controllers/SellerReviewConsumerViewController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.post("/",authenticateToken,SellerReviewConsumerView)

module.exports = router;