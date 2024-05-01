const { ConsumerViewServiceController } = require("../Controllers/ConsumerViewServiceController");
const router = require("express").Router();
const {authenticateToken}=require('../Middleware/CheckTokenLocally');


router.get("/",
    // authenticateToken,
    ConsumerViewServiceController)

module.exports = router;