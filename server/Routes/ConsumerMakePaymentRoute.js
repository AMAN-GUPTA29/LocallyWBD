const router = require("express").Router();
const { consumerPaymentController } = require("../Controllers/ConsumerPaymentController");

router.post("/", consumerPaymentController)

module.exports = router;