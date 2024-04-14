const {authenticateToken} = require('./../Middleware/CheckTokenSellerLocally')
const {AddService} = require('./../Controllers/Service/AddServiceController')
const router = require("express").Router();
const {ViewService} = require('./../Controllers/Service/ViewServicesController')

// ---/api/seller/services/addservice
router.post("/addservice",authenticateToken, AddService)

// ---/api/seller/services/viewservice
 router.get("/viewservice", authenticateToken, ViewService)

module.exports = router;