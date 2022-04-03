const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const verifyTokenAndAuthorization = require("../middleware/verifyTokenAndAuthorization");
const verifyTokenAndAdmin = require("../middleware/verifyTokenAndAdmin");

router.put("/:id", verifyTokenAndAuthorization, userController.update);
router.delete("/:id", verifyTokenAndAuthorization, userController.delete);
router.get("/find/:id", verifyTokenAndAdmin, userController.getUser);
router.get("/", verifyTokenAndAdmin, userController.getAllUsers);
router.get("/stats", verifyTokenAndAdmin, userController.getUserStats);

module.exports = router;
