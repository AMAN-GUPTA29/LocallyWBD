const {serviceLength } = require("../Controllers/AdminTotalServiceController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.get("/",authenticateToken,serviceLength)

module.exports = router;