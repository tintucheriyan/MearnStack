
const MongoClient = require("mongodb").MongoClient;
const url='mongodb://127.0.0.1:27017';
const mongoClient = new MongoClient(url);
const dbName = "Library";
const collectionName = "Books";
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

 function startMenu(req,res){
    res.send(`BOOK MANAGEMENT 
       
        ➤ List of Books
               
        ➤ Add Books
        
        ➤ Edit Books
        
        ➤ Delete Books`)
 }

 function getAllBooks(req, res) {
    dboUser.collection(collectionName).find({}).toArray()
      .then((result) => {
        res.json(result);
      });
  }


function insertBooks(req,res){
    let data=req.body
    dboUser.collection(collectionName).insertOne(data)
    .then(()=>dboUser.collection(collectionName).find({}).toArray())
    .then(result=>res.send("New Book is inserted successfully"))
    .catch(err=>res.send("New Book insertion failed"))
}
  
function updateBooks(req,res){
    let old_data=req.query
    let new_data=req.body
    dboUser.collection(collectionName).updateOne(old_data,{$set:new_data})
    .then(()=>dboUser.collection(collectionName).find({}).toArray())
    .then(result=>res.send("Book is updated successfully"))
    .catch(err=>res.send("Book updation failed"))
    
}

function deleteBooks(req,res){
    let old_data=req.query
    let new_data=req.body
    dboUser.collection(collectionName).deleteOne(old_data,{$set:new_data})
    .then(()=>dboUser.collection(collectionName).find({}).toArray())
    .then(result=>res.send("Book is deleted successfully"))
    .catch(err=>res.send("Book deletion failed"))
    
}


module.exports={startMenu,getAllBooks,insertBooks,updateBooks,deleteBooks}

  
