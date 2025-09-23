const express=require('express');
const app=express();
const port=4000;
app.use(express.json());


const dbHandler=require('./dbHandler.js')

app.get('/start',dbHandler.insertCard)
app.post('/pinGeneration',dbHandler.pinGeneration)
app.get('/mainMenu',dbHandler.mainMenu)
app.get('/login',dbHandler.loginUser)
app.get('/balance',dbHandler.balanceCheck)
app.post('/deposit',dbHandler.deposit)
app.get('/statement',dbHandler.miniStatement)
app.get('/withdraw',dbHandler.withdrawal)
app.get('/finish',dbHandler.transactionFinish)

app.listen(port);