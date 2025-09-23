const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);
const dbName = 'UserDb';
const collectionName = 'students';

let dbo;

client.connect()
  .then(() => {
    dbo = client.db(dbName);
    })
  
  .catch(err => {
    console.error("Failed to perform operation:", err);
  })
///////////////////////////////////////////////////////////////////
function getPass(req,res){
      dbo.collection('students').find({mark:{$gt:30}}).toArray()
      .then(result=>res.json(result))
      .catch(err=>res.send("failed to get passeed students"))
    }

////////////////////////////////////////////////////////////
function getFailed(req,res){
       dbo.collection('students').find({mark:{$lt:30}}).toArray()
      .then(result=>res.json(result))
      .catch(err=>res.send("failed to get failed students"))
    }
////////////////////////////////////////////////////////
module.exports={getPass,getFailed}