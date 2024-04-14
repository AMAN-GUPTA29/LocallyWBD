const {authenticateToken} = require('./../Middleware/CheckTokenSellerLocally')
const {AddService} = require('./../Controllers/Service/AddServiceController')
const router = require("express").Router();

// ---/api/seller/services/addservice
router.post("/addservice",authenticateToken, AddService)

// ---/api/seller/services/viewservice
// router.get("/viewservice",SellerTokenParser, null)

module.exports = router;