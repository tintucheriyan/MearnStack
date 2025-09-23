// use userDb.........for creating DB
//show dbs ......show all data bases
//db.createCollection("cars") ................ creating collection
//show collections   ................showing all collections
//db.students.insertOne({name:"Anu",age:3,mark:20})
//db.students.insertMany([{},{},{}])
//db.students.findOne({age:3})  .........find one data
//db.students.find({$or:[{},{}]}) ..........using OR
//db.students.find({$and:[{},{}]}) ...........using AND
//db.students.find().sort({age:1}) ............sorting ascending order
//db.students.find().sort({age:-1})  .............sorting descending order
//db.students.deleteOne({age:3})  ..........deleting one data
//db.students.deleteMany({}) .....deleting all data in the collection
// db.students.limit(2) ........take first two
// db.students.find().skip(3).limit(2)  ......ignore first 3 and take next two

//pageSize = 2;
//pageNumber = 1;
//nth page
//db.students.find().skip((pageNumber - 1) * pageSize).limit(pageSize)

//db.students.updateOne({mark:20},{$set:{mark:22}})   .....update one
//db.students.updateMany({},{$set:{active:true}})  ..... update many
//db.students.find({mark:{$gt:26}}) .......mark greater than 26
//db.students.find({age:{$lt:20}})  ......age less than 20
//db.students.find({age:{$gte:10}})   .....age greater than 10 
// db.students.updateMany({mark:{$gte:26}},{$set:{remark:"very good"}})    ....for age>26 set remark as very good
//db.students.updateMany({$and:[{mark:{$gt:20}},{mark:{$lte:26}}]},{$set:{remark:"ok fine"}})  ..for 26>=age>20  set as ok fine
//db.students.find({place:{$ne:"kochi"}})   .......find place!=kochi
//db.students.find({$and:[{place:{$ne:"kochi"}},{place:{$ne:"kollam"}}]}) ......place!=kochi and place!=kollam