const router = require("express").Router();
const categoryController = require("../controller/categoryController");
const productController = require("../controller/productController");
const auth = require("../controller/authController");
const midAuthentication = require("../middleware/auth");
const userController = require("../controller/userController");

//authentication
router.get("/login", auth);

//user route
router.get("/user", userController.getuser);
router.put("/user/:id", userController.updateUser);
router.post("/user", userController.addUser);

// product routes
router.get("/product", productController.getProduct);
router.get("/product/:id", productController.getOne);
router.post("/product", productController.addProduct);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);
router.get("/productByCategory/:id", productController.getProductByCategory);

// category routes
router.post("/category", categoryController.addCategory);
router.get("/category", categoryController.getCategory);
router.delete("/category/:id", categoryController.deleteCategory);

module.exports = router;
