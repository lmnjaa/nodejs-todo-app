const express = require('express');
const cors = require('cors');

const app = express();

// Routes
const userRoute = require('./routes/user.route');

// Application usings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Use routes
app.use('/user', userRoute);

module.exports = app;