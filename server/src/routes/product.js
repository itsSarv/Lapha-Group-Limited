const router = require("express").Router();
const addproduct = require("../controllers/product")

router.post("/product", addproduct);

module.exports = router;
