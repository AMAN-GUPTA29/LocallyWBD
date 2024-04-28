const {sellerReviewController} = require("../Controllers/ViewSellerReviewController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenSellerLocally');


router.get("/",authenticateToken,sellerReviewController)

module.exports = router;