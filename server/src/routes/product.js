const router = require("express").Router();
const {addproduct, getproduct} = require("../controllers/product")

router.post("/product", addproduct);
router.get('/product',getproduct)

module.exports = router;
