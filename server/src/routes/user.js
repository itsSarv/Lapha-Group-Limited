const router = require("express").Router()

const {registerNewUser} = require('../controllers/users')

router.post('/register', registerNewUser)
module.exports = router