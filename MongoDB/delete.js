const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);
const dbName = 'UserDb';
const collectionName = 'cars';

/////////////////////////////////////   created a collection name "cars" then deleted
client.connect()
  .then(() => {
    const dbo = client.db(dbName);
    return dbo.collection(collectionName).drop()
    .then(result=>{
        console.log("collection deleted")
    })
    .catch(err=>{
        console.log("collection  not deleted")
    })
    
    

  })
  
  .catch(err => {
    console.error("Failed to perform operation:", err);
  })
  .finally(() => {
    client.close().then(() => console.log("Connection closed"));
  });
