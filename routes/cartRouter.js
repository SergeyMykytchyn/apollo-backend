const Router = require("express");
const router = new Router();
const cartController = require("../controllers/cartController");
const verifyToken = require("../middleware/verifyToken");
const verifyTokenAndAuthorization = require("../middleware/verifyTokenAndAuthorization");
const verifyTokenAndAdmin = require("../middleware/verifyTokenAndAdmin");

router.post("/", verifyToken, cartController.create);
router.put("/:id", verifyTokenAndAuthorization, cartController.update);
router.delete("/:id", verifyTokenAndAuthorization, cartController.delete);
router.get("/find/:userId", verifyTokenAndAuthorization, cartController.getUserCart);
router.get("/", verifyTokenAndAdmin, cartController.getAll);

module.exports = router;
