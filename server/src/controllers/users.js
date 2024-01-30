const User = require('../models/user')
const registerNewUser = (req, res)=>{
    User.create(req.body)
    res.json({
        msg:"registered succesfully"
    })
}
module.exports = {registerNewUser}