const express=require('express')
const router=express.Router()
const bookController=require('./../controller/bookController.js')

router.route('/startMenu').get(bookController.startMenu)
router.route('/getAllBooks').get(bookController.getAllBooks);
router.route('/insertBooks').post(bookController.insertBooks);
router.route('/updateBooks').put(bookController.updateBooks);
router.route('/deleteBooks').delete(bookController.deleteBooks);

module.exports=router;