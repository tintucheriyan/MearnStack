const express=require('express')
const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);
const dbName = 'UserDb';
const collectionName = 'students';

const app = express();
const port = 3000;
app.use(express.json());
  
let dbo;
/////////////////////////////////////////////////////////////////

client.connect()
  .then(() => {
    dbo = client.db(dbName);
    })
  
  .catch(err => {
    console.error("Failed to perform operation:", err);
  })

/////////////////////////////////////////////////////////////////////

   app.get('/getTeachers',(req,res)=>{
        dbo.collection('teachers').find().toArray()
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            res.send("failed to get teachers")
        })
    })
    app.listen(4700)