const express = require('express');
const cors = require('cors');

const app = express();

// Routes
const userRoute = require('./routes/user.route');
const ticketRoute = require('./routes/ticket.route');
const authRoute = require('./routes/authorization.route');

// Application usings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Use routes
app.use('/user', userRoute);
app.use('/ticket', ticketRoute);
app.use('/auth', authRoute);

module.exports = app;