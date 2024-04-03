const router = require("express").Router();
const { sellerRegistrationController } = require("../Controllers/SellerRegistrationController");


router.post("/", sellerRegistrationController)



module.exports=router;