const { adminProfileUpdateController } = require("../Controllers/AdminProfileUpdateController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.put("/",authenticateToken,adminProfileUpdateController)

module.exports = router;