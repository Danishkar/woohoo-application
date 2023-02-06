const express = require("express");
const {loginUser,signUpUser} = require("../controllers/userController")
const router = express.Router();


// login routes
router.post("/login",loginUser)

// and signup routes
router.post("/signup",signUpUser)



module.exports = router