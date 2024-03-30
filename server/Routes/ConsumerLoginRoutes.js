const router = require("express").Router();
const { consumerloginController } = require("../Controllers/ConsumerLoginController");

router.post("/", consumerloginController)

module.exports = router;