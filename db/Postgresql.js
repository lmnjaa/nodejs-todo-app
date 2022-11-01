require('dotenv').config();

const { Pool } = require('pg')

const pool = new Pool({
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
})

pool.on('connect', () => {
    console.log('Connection to the database has been established.');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};