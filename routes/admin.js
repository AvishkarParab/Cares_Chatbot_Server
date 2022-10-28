const express = require("express");
const router = express.Router();
const {
    login,
    register

} = require("../controllers/adminController")


//Login Admin
router.post("/login",login);

//Register Admin
router.post("/register",register);

module.exports = router;