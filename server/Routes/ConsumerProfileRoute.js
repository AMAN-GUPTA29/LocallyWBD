const { consumerProfileViewController } = require("../Controllers/consumerprofileviewcontroller");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.get("/",authenticateToken,consumerProfileViewController)

module.exports = router;