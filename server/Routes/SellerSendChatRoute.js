const {authenticateToken} = require('./../Middleware/CheckTokenSellerLocally')
const {sellerSendChat} = require('./../Controllers/SellerSendChatController')
const router = require("express").Router();



router.post("/",authenticateToken, sellerSendChat)


module.exports = router;