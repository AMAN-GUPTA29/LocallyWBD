const router = require("express").Router();
const { adminloginController } = require("../Controllers/AdminLoginController");

router.post("/", adminloginController)

module.exports = router;