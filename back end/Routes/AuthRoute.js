const express = require("express");
const router = express.Router();

const { Register, Login } = require("../Controller/AuthController");

router.post("/login", Login);
router.post("/Register", Register);

module.exports = router;