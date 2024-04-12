const { adminProfileViewController } = require("../Controllers/AdminProfileViewController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenAdminLocally');


router.get("/",authenticateToken,adminProfileViewController)

module.exports = router;