const Router = require("express");
const router = new Router();
const productController = require("../controllers/productController");
const verifyTokenAndAdmin = require("../middleware/verifyTokenAndAdmin");

router.post("/", verifyTokenAndAdmin, productController.create);
router.put("/:id", verifyTokenAndAdmin, productController.update);
router.delete("/:id", verifyTokenAndAdmin, productController.delete);
router.get("/find/:id", productController.getProduct);
router.get("/", productController.getAllProducts);

module.exports = router;
