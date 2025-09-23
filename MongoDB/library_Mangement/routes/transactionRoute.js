const express=require('express')
const router=express.Router()
const transactionController=require('./../controller/transactionController.js')


router.route('/getAllTransaction').get(transactionController.getAllTransaction);
router.route('/insertTransaction').post(transactionController.insertTransaction);
router.route('/updateTransaction').put(transactionController.updateTransaction);
router.route('/deleteTransaction').delete(transactionController.deleteTransaction);

module.exports=router;