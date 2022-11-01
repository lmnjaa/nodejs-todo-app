const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.get('/tickets/:ticketId', userController.getTicketsFromUserByUserId);

module.exports = router;