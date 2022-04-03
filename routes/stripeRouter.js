const Router = require("express");
const router = new Router();
const stripeController = require("../controllers/stripeController");

router.post("/payment", stripeController.payment);

module.exports = router;
