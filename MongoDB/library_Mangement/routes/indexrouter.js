const express = require('express');
const router = express.Router();
const UsersRoute = require('./usersRoute');
const BooksRoute = require('./bookRoute');
const TransactionsRoute = require('./transactionRoute');


router.use('/users',UsersRoute);
router.use('/books',BooksRoute);
router.use('/transactions',TransactionsRoute);

module.exports = router;