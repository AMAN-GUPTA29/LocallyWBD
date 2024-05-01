const { adminRequestListController } = require("../Controllers/AdminServiceRequestView");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.get("/",authenticateToken,adminRequestListController)

module.exports = router;