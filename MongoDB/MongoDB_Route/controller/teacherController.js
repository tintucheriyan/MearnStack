const MongoClient = require("mongodb").MongoClient;
const url='mongodb://127.0.0.1:27017';
const mongoClient = new MongoClient(url);
const dbName = "UserDb";
const collectionName = "teachers";
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


   function getAllTeachers(req, res) {
      dboUser.collection('teachers').find({}).toArray()
        .then((result) => {
          res.json(result);
        });
    }
   
    function insertTeacher(req,res){
      dboUser.collection('teachers').insertOne({name:"ithal",age:23,subject:"Chemistry"})
      .then(()=>dboUser.collection('teachers').find({}).toArray())
      .then(result=>res.send(result))
      .catch(err=>res.send("failed to insert teacher"))
    }

    function updateTeacher(req,res){
      dboUser.collection('teachers').updateOne({name:"ithal"},{$set:{subject:"French"}})
      .then(()=>dboUser.collection('teachers').find({}).toArray())
      .then(result=>res.json(result))
      .catch(err=>res.send("failed to update teacher"))
    }

    function deleteTeacher(req,res){
      dboUser.collection('teachers').deleteOne({name:"ithal"})
      .then(()=>dboUser.collection('teachers').find({}).toArray())
      .then(result=>res.json(result))
      .catch(err=>res.send("failed to delete teacher"))
    }

    module.exports={getAllTeachers,insertTeacher,updateTeacher,deleteTeacher}