
const MongoClient = require("mongodb").MongoClient;
const url='mongodb://127.0.0.1:27017';
const mongoClient = new MongoClient(url);
const dbName = "UserDb";
const collectionName = "students";
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

 function getAllStudents(req, res) {
    dboUser.collection('students').find({}).toArray()
      .then((result) => {
        res.json(result);
      });
  }

  function insertStudent(req,res){
    dboUser.collection('students').insertOne({name:"Athira",age:34,mark:45,active:true,remark:"very good",place:"Wayanad"})
    .then(()=>dboUser.collection('students').find({}).toArray())
      .then(result=>res.json(result))
    .catch(err=>res.send("failed to insert student"))
  }

  function deleteStudent(req,res){
      let name=req.query.name
      dboUser.collection('students').deleteOne({name:name})
      .then(()=>dboUser.collection('students').find({}).toArray())
      .then(result=>res.json(result))
    .catch(err=>res.send("failed to delete student"))
  }

  function updateStudent(req,res){
     let name=req.query.name
      dboUser.collection('students').updateOne({name:name},{$set:{place:"Vadakara"}})
      .then(()=>dboUser.collection('students').find({}).toArray())
      .then(result=>res.json(result))
    .catch(err=>res.send("failed to update student"))
  }
module.exports={getAllStudents,insertStudent,deleteStudent,updateStudent}

  
