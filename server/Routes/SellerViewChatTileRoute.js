const {authenticateToken} = require('./../Middleware/CheckTokenSellerLocally')
const {sellerViewChatTile} = require('./../Controllers/SellerViewChatTileController')
const router = require("express").Router();



router.get("/",authenticateToken, sellerViewChatTile)


module.exports = router;