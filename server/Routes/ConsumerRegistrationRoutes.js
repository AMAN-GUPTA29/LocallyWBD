const router = require("express").Router();
const { consumerRegistrationController } = require("../Controllers/ConsumerRegistrationController");


router.post("/", consumerRegistrationController)



module.exports=router;