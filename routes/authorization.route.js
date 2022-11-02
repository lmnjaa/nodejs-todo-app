const express = require('express');
const router = express.Router();

const authorizationController = require('../controllers/authorization.controller');

router.post('/login', authorizationController.login);
router.post('/register', authorizationController.register);

module.exports = router;