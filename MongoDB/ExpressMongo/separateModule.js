const express=require('express')
const app = express();
const port = 3000;
app.use(express.json());
  
let dbHandler=require('./dbHandler.js')



/////////////////////////////////////////////////////////////////
app.get('/getPass',dbHandler.getPass)
app.get('/getFailed',dbHandler.getFailed)
app.listen(4700)


