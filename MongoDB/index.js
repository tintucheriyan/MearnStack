const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);
const dbName = 'UserDb';
const collectionName = 'students';

///////////////////////////////////////////////////////////////////////////////////////////////////////

function getData(dbo){
    return dbo.collection(collectionName).find({ name: "Maya" }).toArray()
    .then(getResult=>{
       console.log("get success",getResult)
    })
    .catch(err=>{
      console.log("get failure",err)
    })
}
///////////////////////////////////////////////////////////////////////////////////
function getAll(dbo){
  return dbo.collection(collectionName).find().toArray()
  .then(getResult=>{
       console.log("get all success",getResult)
    })
    .catch(err=>{
      console.log("get all failure",err)
    })
}
///////////////////////////////////////////////////////////////////////////////////////////
function insertData(dbo){
   return dbo.collection(collectionName).insertOne({name: "Latha",age: 50,mark: 18,place: "Calicut", active: true})
   .then(insertData=>{
    console.log("insert sucess")
   })
   .catch(err=>{
    console.log("insert failed",err)
   })
    
}
////////////////////////////////////////////////////////////////////////////////////////
function insertMany(dbo,data){
    return dbo.collection(collectionName).insertMany(data)
    .then(insertmanyData=>{
      console.log("insert many sucess")
    })
    .catch(err=>{
      console.log("insert many failed")
    })
}
////////////////////////////////////////////////////////////////////////
function delMany(dbo){
    return dbo.collection(collectionName).deleteMany({name:"Renu"})
    .then(result=>{
      console.log("Delete success")
    })
    .catch(err=>{
      console.log("Delete failed")
    })
}
////////////////////////////////////////////////////////////////////////////
function delOne(dbo,data){
  return dbo.collection(collectionName).deleteOne(data)
   .then(result=>{
      console.log("Delete success",result)
    })
    .catch(err=>{
      console.log("Delete failed")
    })
}
////////////////////////////////////////////////////////////////////////////
function update(dbo){
   return dbo.collection(collectionName).updateOne({name:"mary"},{$set:{mark:45}})
   .then(result=>{
    console.log("inserted success",result)
   })
   .catch(err=>{
    console.log("insert fail",err)
   })
}
////////////////////////////////////////////////////////////////////////////////////////
function projectionDataInclus(dbo){
  return dbo.collection(collectionName).find({}).project({name:1,age:1}).toArray()
  .then(result=>{
    console.log("Projection inclusive success",result)
  })
  .catch(err=>{
    console.log("projection inclusive failed")
  })
}
///////////////////////////////////////////////////////////////////////////////////////
function projectDataExclus(dbo){
  return dbo.collection(collectionName).find({}).project({name:0,age:0}).toArray()
  .then(result=>{
    console.log("projection exclusive success",result)
  })
  .catch(err=>{
      console.log("projection exclusive failed")
  })
}
///////////////////////////////////////////////////////////////////////////////////
function pagination(dbo){
   let pageNum=3
   let limit=2
   let skip=(pageNum-1)*limit
   return dbo.collection(collectionName).find().skip(skip).limit(limit).toArray()
   .then(result=>{
    console.log("pagination success",result)
  })
  .catch(err=>{
      console.log("pagination failed")
  })
}
///////////////////////////////////////////////////////////////
client.connect()
  .then(() => {
    const dbo = client.db(dbName);
    let user1=[{name: "mary",age: 60,mark: 38,place: "kochi", active: true},{name: "Ram",age: 40,mark: 36,place: "Calicut", active: true}]
    let delData={name: "Ram",age: 40,mark: 36,place: "Calicut", active: true}
     //return insertData(dbo).then(()=>getData(dbo));
     //return insertMany(dbo,user1).then(()=>getAll(dbo))
     //return delMany(dbo)
     //return delOne(dbo,delData)
     //return update(dbo)
     //return projectionDataInclus(dbo)
     //return projectDataExclus(dbo)
      return pagination(dbo)
    

  })
  
  .catch(err => {
    console.error("Failed to perform operation:", err);
  })
  .finally(() => {
    client.close().then(() => console.log("Connection closed"));
  });
