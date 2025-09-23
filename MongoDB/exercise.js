//use Users
//db.createCollection("Students")
//db.Students.insertOne({name:"Karthi",age:20,course:"Maths"})
// db.Students.insertMany([{name:"Karthi",age:20,course:"Maths"},
//                         {name:"Anu",age:25,course:"Physics"},{name:"Sini",age:30,course:"Chemistry"},
//                         {name:"Chikku",age:35,course:"Engish"}])
//db.Students.find()
//db.Students.find().pretty()
//db.Students.findOne({name:"Sini"})
//db.Students.find({age:{$gt:25}})
// db.Students.find({age:{$gt:20,$lt:30}})
//db.Students.find({$or:[{course:"Maths"},{course:"Physics"}]})
//db.Students.updateOne({name:"Anu"},{$set:{age:28}})
//db.Students.updateMany({$or:[{name:"Karthi"},{name:"Chikku"},{name:"Anu"}]},{$set:{course:"Advanced Maths"}})
//db.Students.deleteOne({name:"Karthi"})
//db.Students.deleteOne({course:"Chemistry"})
//db.Students.find().sort({age:-1})
//db.Students.find().sort({name:-1})