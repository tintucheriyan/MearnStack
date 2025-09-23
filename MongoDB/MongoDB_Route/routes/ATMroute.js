const express=require('express')
const router=express.Router()
const ATMcontroller=require('./../controller/ATMcontroller.js')


router.route('/start').get(ATMcontroller.insertCard);
router.route('/pinGeneration').post(ATMcontroller.pinGeneration);
router.route('/mainMenu').get(ATMcontroller.mainMenu);
router.route('/login').get(ATMcontroller.loginUser);
router.route('/balance').get(ATMcontroller.balanceCheck);
router.route('/deposit').post(ATMcontroller.deposit);
router.route('/changePin').put(ATMcontroller.pinChange);
router.route('/statement').get(ATMcontroller.miniStatement);
router.route('/withdraw').put(ATMcontroller.withdrawal);
router.route('/finish').get(ATMcontroller.transactionFinish);



module.exports=router;


