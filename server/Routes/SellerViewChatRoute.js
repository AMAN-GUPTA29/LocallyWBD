const {authenticateToken} = require('./../Middleware/CheckTokenSellerLocally')
const {sellerViewChat} = require('./../Controllers/SellerViewChatController')
const router = require("express").Router();



router.post("/",authenticateToken, sellerViewChat)


module.exports = router;