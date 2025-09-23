
const MongoClient = require("mongodb").MongoClient;
const url='mongodb://127.0.0.1:27017';
const mongoClient = new MongoClient(url);
const dbName = "Library";
const collectionName = "Transactions";
let dboUser;

mongoClient
  .connect()
  .then((connection) => {
    dboUser = connection.db(dbName);
    console.log("Connected...");
  })
  .catch((err) => {
    console.log("Error in connecting", err);
  });



 function getAllTransaction(req, res) {
    dboUser.collection(collectionName).find({}).toArray()
      .then((result) => {
        res.json(result);
      });
  }


function insertTransaction(req,res){
    let data=req.body
    dboUser.collection(collectionName).insertOne(data)
    .then(()=>dboUser.collection(collectionName).find({}).toArray())
    .then(result=>res.send("Transaction is inserted successfully"))
    .catch(err=>res.send("Transaction insertion failed"))
}
  
function updateTransaction(req,res){
    let old_data=req.query
    let new_data=req.body
    dboUser.collection(collectionName).updateOne(old_data,{$set:new_data})
    .then(()=>dboUser.collection(collectionName).find({}).toArray())
    .then(result=>res.send("Transaction is updated successfully"))
    .catch(err=>res.send("Transaction updation failed"))
    
}

function deleteTransaction(req,res){
    let old_data=req.query
    let new_data=req.body
    dboUser.collection(collectionName).deleteOne(old_data,{$set:new_data})
    .then(()=>dboUser.collection(collectionName).find({}).toArray())
    .then(result=>res.send("Transaction is deleted successfully"))
    .catch(err=>res.send("Transaction deletion failed"))
    
}


module.exports={getAllTransaction,insertTransaction,updateTransaction,deleteTransaction}

  
