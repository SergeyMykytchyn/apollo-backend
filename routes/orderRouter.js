const Router = require("express");
const router = new Router();
const orderController = require("../controllers/orderController");
const verifyToken = require("../middleware/verifyToken");
const verifyTokenAndAuthorization = require("../middleware/verifyTokenAndAuthorization");
const verifyTokenAndAdmin = require("../middleware/verifyTokenAndAdmin");

router.post("/", verifyToken, orderController.create);
router.put("/:id", verifyTokenAndAdmin, orderController.update);
router.delete("/:id", verifyTokenAndAdmin, orderController.delete);
router.get("/find/:userId", verifyTokenAndAuthorization, orderController.getUserOrders);
router.get("/", verifyTokenAndAdmin, orderController.getAll);
router.get("/income", verifyTokenAndAdmin, orderController.getMonthlyIncome);

module.exports = router;
