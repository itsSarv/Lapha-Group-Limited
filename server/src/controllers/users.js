const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/user')
const registerNewUser = async (req, res)=>{
    try{
        const existinguser = await User.findOne({email: req.body.email})
        if(existinguser){
            return res.status(403).json({
                msg:"User Already Exist"
            })
        }

    const bcryptpassword = await bcrypt.hash(req.body.password, saltRounds)
    req.body.password = bcryptpassword
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
        //finding email in our database
        const useremail = await User.findOne({email: req.body.email}).select("+password");
        if(!useremail){
            return res.status(403).json({
                msg: "Email or Password Incorrect"
            })}

       // comparing the hash password
        const userpass = await bcrypt.compare(req.body.password, useremail.password)
        if(!userpass){
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