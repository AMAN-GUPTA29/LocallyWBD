const {checkAdminHistory} = require("../Controllers/CheckHistoryAdminController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.get("/",authenticateToken,checkAdminHistory)

module.exports = router;