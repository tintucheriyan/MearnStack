const express = require('express');
const router = express.Router();
const studentsRoute = require('./studentRoute');
const teachersRoute = require('./teacherRoute');
const ATMroute=require('./ATMroute')

router.use('/students', studentsRoute);
router.use('/teachers', teachersRoute);
router.use('/ATM',ATMroute);

module.exports = router;