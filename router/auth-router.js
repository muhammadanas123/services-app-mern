const express = require('express');
const router = express.Router();
const { home } = require('../controllers/auth-controller');
const { register } = require("../controllers/auth-controller")

router.route("/register").get(register)

router.route('/').get(home);

module.exports = router;
