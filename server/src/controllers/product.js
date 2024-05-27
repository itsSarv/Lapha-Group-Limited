const Product = require('../models/product')

const addproduct = async (req, res)=>{
   await Product.create(req.body)
   return res.json({msg: "Product Created"})
}


module.exports = {addproduct}