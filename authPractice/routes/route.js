const express = require('express')
const router = express.Router()
const {handleRegister,handleLogin} = require("../controllers/controller")

router.post('/login',handleLogin);
router.post('/register',handleRegister);



module.exports = router;