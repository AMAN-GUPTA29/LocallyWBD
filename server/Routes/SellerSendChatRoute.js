const {authenticateToken} = require('./../Middleware/CheckTokenSellerLocally')
const {sellerSendChat} = require('./../Controllers/SellerSendChatController')
const router = require("express").Router();



router.get("/",authenticateToken, sellerSendChat)


module.exports = router;