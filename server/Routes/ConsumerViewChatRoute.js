const {authenticateToken} = require('./../Middleware/CheckTokenLocally')
const {consumerViewChat} = require('./../Controllers/ConsumerReadChatController')
const router = require("express").Router();



router.get("/",authenticateToken,consumerViewChat)


module.exports = router;