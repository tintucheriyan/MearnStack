const express=require('express')
const { Collection } = require('mongodb')
const app=express()
app.use(express.json())
const MongoClient=require("mongodb").MongoClient
const url='mongodb://localhost:27017'
const mongoClient=new MongoClient(url);
const dbName="userdb"
 const collectionName="students"
 const PORT=4000

 app.get("/getUser",(req,res)=>{
    let name=req.query.name
    mongoClient.connect().then(db=>{
        let dbo=db.db(dbName)
        dbo.collection("students").findOne({name:req.query.name}).then(result=>{
            res.json(result)
        })

     }).catch(err=>{
       res.send("could not be connect db")
  })
    
 });app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});