const {authenticateToken} = require('./../Middleware/CheckTokenLocally')
const {consumerViewChat} = require('./../Controllers/ConsumerReadChatController')
const router = require("express").Router();



router.post("/",authenticateToken,consumerViewChat)


module.exports = router;