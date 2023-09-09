const express = require("express");
const router = express.Router();


const { Signup, Login } = require("../controllers/ownerAuth");
const encryptPassword = require("../middleware/passEncrypt");

router.post("/signup", encryptPassword, Signup);

router.post("/login", Login);
 
module.exports = router;  