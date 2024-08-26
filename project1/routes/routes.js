const express=require("express");
const router=express.Router();
const productcontroller = require("../controllers/product.Crontroller.js");

router.get('/hello',productcontroller.hello);
router.post('/save-product',productcontroller.saveProducts)
router.get("/get-all-products",productcontroller.getAllProducts);
router.post("/get-product-by-id/:id",productcontroller.getProductById)
router.post("/update-product/:id",productcontroller.updateProductById)
router.post("/product-delete/:id",productcontroller.deleteProductById);

module.exports =router;