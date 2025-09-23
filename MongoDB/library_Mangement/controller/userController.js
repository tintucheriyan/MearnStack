import User from "../models/userModel";
const MongoClient = require("mongodb").MongoClient;
const url='mongodb://127.0.0.1:27017';
const mongoClient = new MongoClient(url);
const dbName = "Library";
const collectionName = "UserManagement";
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
    res.send(`USER MANAGEMENT 
       
        ➤ List of Users
               • Admins
               • Staffs
               • Students

        ➤ User Insertion
        
        ➤ User Updation
        
        ➤ User Deletion`)
 }

 function getAllStudents(req, res) {
    dboUser.collection(collectionName).find({role:"student"}).toArray()
      .then((result) => {
        res.json(result);
      });
  }

  
 function getAllStaffs(req, res) {
    dboUser.collection(collectionName).find({role:"staff"}).toArray()
      .then((result) => {
        res.json(result);
      });
  }

  function getAllAdmins(req, res) {
    dboUser.collection(collectionName).find({role:"admin"}).toArray()
      .then((result) => {
        res.json(result);
      });
  }

function insertUsers(req,res){
    let data=req.body
    dboUser.collection(collectionName).insertOne(data)
    .then(()=>dboUser.collection(collectionName).find({}).toArray())
    .then(result=>res.send("New user is inserted successfully"))
    .catch(err=>res.send("New user insertion failed"))
}
  
function updateUsers(req,res){
    let old_data=req.query
    let new_data=req.body
    dboUser.collection(collectionName).updateOne(old_data,{$set:new_data})
    .then(()=>dboUser.collection(collectionName).find({}).toArray())
    .then(result=>res.send("User is updated successfully"))
    .catch(err=>res.send("User updation failed"))
    
}

function deleteUsers(req,res){
    let old_data=req.query
    let new_data=req.body
    dboUser.collection(collectionName).deleteOne(old_data,{$set:new_data})
    .then(()=>dboUser.collection(collectionName).find({}).toArray())
    .then(result=>res.send("User is deleted successfully"))
    .catch(err=>res.send("User deletion failed"))
    
}


module.exports={startMenu,getAllStudents,getAllStaffs,getAllAdmins,insertUsers,updateUsers,deleteUsers}

  
