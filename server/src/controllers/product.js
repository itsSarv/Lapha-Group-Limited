const Product = require('../models/product')

const addproduct = async (req, res)=>{
   await Product.create(req.body)
   return res.json({msg: "Product Created"})
}

const getproduct = async (req, res)=>{
  const productlist= await Product.find()
   res.json({productlist})
}



module.exports = {addproduct, getproduct}