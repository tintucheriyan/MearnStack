const express=require('express')
const routes=express.Router()
const user=require('../controllers/userController')
const authMiddleware=require('../middlewares/auth')

routes.post('/register', user.register);

routes.post('/login', user.login);

routes.get('/profile', authMiddleware.protect, (req, res) => {
  res.json({ message: 'you are authenticated', user: req.user });
});

module.exports=routes;