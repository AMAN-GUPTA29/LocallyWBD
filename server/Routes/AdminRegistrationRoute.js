const router = require("express").Router();
const { adminRegistrationController } = require("../Controllers/AdminRegistrationController");


router.post("/", adminRegistrationController)



module.exports=router;