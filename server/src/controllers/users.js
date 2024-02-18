const User = require('../models/user')
const registerNewUser = async (req, res)=>{
    try{
        const existinguser = await User.findOne({email: req.body.email})
        if(existinguser){
            return res.status(403).json({
                msg:"User Already Exist"
            })
        }
    await User.create(req.body)
    res.json({
        msg:"Registered Succesfully"
    })
    }
    catch(err){
        console.log(err)
    }
}

const loginUser = async(req,res)=>{
    try{
        const useremail = await User.findOne({email: req.body.email})
        const userpass = await User.findOne({password: req.body.password})
        if(!useremail || !userpass){
            return res.status(403).json({
                msg: "Email or Password Incorrect"
            })
        }
        res.json({
            msg: "Login Successful"
        })
    }
    catch(err){
        return res.status(500).json({
            msg: "Server Couldn't Load"
        })
    }
}
module.exports = {registerNewUser, loginUser}