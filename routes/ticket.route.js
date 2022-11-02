const express = require('express');
const router = express.Router();

const ticketController = require('../controllers/ticket.controller');

router.get('/', ticketController.getAllTickets);
router.get('/:id', ticketController.getTicketById);

module.exports = router;