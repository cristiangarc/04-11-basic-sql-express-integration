const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'shopmate',
  user: 'postgres', // Update this to be "postgres"
  password: 'minimouse2' // You might not need this, but probably it's "postgres" as well
});

module.exports = db;