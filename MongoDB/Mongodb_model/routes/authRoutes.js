const express = require('express');
const router = express.Router();

const {register,login} = require('../controllers/authController'); // also CommonJS style
const authMiddleware = require('../middleware/auth');

router.post('/register', register);

router.post('/login', login);

router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'you are authenticated', user: req.user });
});

module.exports = router;  
