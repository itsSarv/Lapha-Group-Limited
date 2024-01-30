const router = require("express").Router();

const { registerNewUser } = require("../controllers/users");

router.get("/register", registerNewUser);
module.exports = router;
