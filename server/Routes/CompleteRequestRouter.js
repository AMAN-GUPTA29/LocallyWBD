const router = require("express").Router();
const { CompletedRequestHandlerController } = require("../Controllers/CompletedRequestHandlerController");
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.get("/:id", authenticateToken, CompletedRequestHandlerController)
 
module.exports = router;