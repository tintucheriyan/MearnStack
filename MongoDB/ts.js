const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);
const dbName = 'UserDb';
const collectionName = 'students';

client.connect()
  .then((connection) => {
    const dbo = connection.db(dbName);

    return dbo.collection(collectionName).find({ name: "Maya" }).toArray()
      .then(result => {
        console.log("Find Success:", result);

        return dbo.collection(collectionName).insertOne({
          name: "Renu",
          age: 34,
          mark: 28,
          place: "Kollam",
          active: true
        });
      })
      .then(insertResult => {
        console.log("Insert Success:");

        return dbo.collection(collectionName).insertMany([
           {name: "Meenu",age: 42,mark: 50,place: "Kollam",active: true},
           {name: "Mini",age: 24,mark: 48,place: "Kottayam",active: true}]);
        })
      .then(insertManyResult => {
        console.log("Insert many Success:", insertManyResult);
       });
    })
  .catch(err => {
    console.error("Failed to perform operation:", err);
  })
  .finally(() => {
    client.close();
  });
