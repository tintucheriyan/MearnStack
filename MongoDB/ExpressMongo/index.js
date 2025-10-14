const express = require("express");
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);
const dbName = "UserDb";
const collectionName = "students";

const app = express();
const port = 3000;
app.use(express.json());

client
  .connect()
  .then(() => {
    const dbo = client.db(dbName);
    app.get("/getStudents", (req, res) => {
      dbo
        .collection("students")
        .find()
        .toArray()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.send("failed to get students");
        });
    });
    ////////////////////////////////////////////////////////////////
    app.get("/getTeachers", (req, res) => {
      dbo
        .collection("teachers")
        .find()
        .toArray()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.send("failed to get teachers");
        });
    });
    /////////////////////////////////////////////////////////////////////////
    app.post("/insertTeacher", (req, res) => {
      let data = req.body;
      dbo
        .collection("teachers")
        .insertOne(data)

        .then(() => {
          return dbo
            .collection("teachers")
            .find()
            .toArray()
            .then((result) => {
              res.json(result);
            });
        })
        .catch((err) => {
          res.send("failed to insert new teacher");
        });
    });
    ////////////////////////////////////////////////////////////////////////////////
    app.post("/validation", (req, res) => {
      let user = req.body;
      let name = user.name;
      let mark = parseInt(user.mark);
      let age = parseInt(user.age);
      if (user.hasOwnProperty("name")) {
        if (user.hasOwnProperty("age")) {
          if (user.hasOwnProperty("mark")) {
            if (isFinite(mark) && isFinite(age)) {
              if (age >= 20 && age <= 60) {
                if (mark >= 0 && mark <= 50) {
                  dbo
                    .collection("students")
                    .insertOne(user)
                    .then(() => {
                      return dbo.collection("students").find().toArray();
                    })
                    .then((result) => res.json(result))
                    .catch((err) => res.send("failed to insert new user"));
                } else {
                  res.send("Mark must be in the range");
                }
              } else {
                res.send("Age must be with in the range");
              }
            } else {
              res.send("Mark and Age should be number");
            }
          } else {
            res.send("mark is mandatory");
          }
        } else {
          res.send("Age is mandatory");
        }
      } else {
        res.send("Name is mandatory");
      }
    });
    //////////////////////////////////////////////////////
    app.get("/average", (req, res) => {
      dbo
        .collection("students")
        .find({})
        .project({ mark: 1, _id: 0 })
        .toArray()
        .then((result) => {
          const marks = result.map((doc) => doc.mark);
          let sum = 0;
          let avg = 0;
          for (let item of marks) {
            sum = sum + item;
          }
          avg = sum / marks.length;
          res.send(`Average of numbers is ${avg}`);
        })

        .catch((err) => {
          res.send("failled to find the average");
        });
    });
    ///////////////////////////////////////////////////
    app.get("/oldest", (req, res) => {
      dbo
        .collection("students")
        .find({})
        .sort({ age: -1 })
        .skip(0)
        .limit(1)
        .toArray()
        .then((result) => res.send(result[0].name))
        .catch((err) => res.send(`The oldest is ${result[0].name}`));
    });
    /////////////////////////////////////////////////
    app.get("/youngst", (req, res) => {
      dbo
        .collection("students")
        .find()
        .sort({ age: 1 })
        .skip(0)
        .limit(1)
        .toArray()
        .then((result) => res.send(`The youngest is ${result[0].name}`))
        .catch((err) => res.send("failed to find the youngest"));
    });
    //////////////////////////////////////////////
    app.get("/highestMark", (req, res) => {
      dbo
        .collection("students")
        .find()
        .sort({ mark: -1 })
        .skip(0)
        .limit(1)
        .toArray()
        .then((result) => res.send(`Highest mark to ${result[0].name}`))
        .catch((err) => res.send("Failed to get the highest"));
    });
    ////////////////////////////////////////
    app.get("/pagination", (req, res) => {
      let pageNum = parseInt(req.query.pageNum);
      let limit = parseInt(req.query.limit);
      let skip = (pageNum - 1) * limit;
      dbo
        .collection("students")
        .find()
        .skip(skip)
        .limit(limit)
        .toArray()
        .then((result) => {
          res.json(result);
        });
    });
    //////////////////////////////////// get particular student details
    app.get("/getOneStudent", (req, res) => {
      let name = req.query.name;
      dbo
        .collection("students")
        .findOne({ name: name })
        .then((result) => res.json(result))
        .catch((err) =>
          res.send("failed to get details of particular student")
        );
    });
    //////////////////////////////////      get failed students
    app.get("/getFailed", (req, res) => {
      dbo
        .collection("students")
        .find({ mark: { $lt: 30 } })
        .toArray()
        .then((result) => res.json(result))
        .catch((err) => res.send("failed to get failed students"));
    });
    ///////////////////////////////////////////   get passed students
    app.get("/getPass", (req, res) => {
      dbo
        .collection("students")
        .find({ mark: { $gt: 30 } })
        .toArray()
        .then((result) => res.json(result))
        .catch((err) => res.send("failed to get passeed students"));
    });
    ////////////////////////////////////////  avg of age
    app.get("/avgAge", (req, res) => {
      dbo
        .collection("students")
        .find({})
        .project({ age: 1 })
        .toArray()
        .then((result) => {
          const ages = result.map((items) => items.age);
          let sum = 0;
          let average = 0;
          for (let item of ages) {
            sum = sum + item;
          }
          average = sum / ages.length;
          res.send(`Average age of students is ${average}`);
        })
        .catch((err) => res.send("failed to get average of age"));
    });
    ////////////////////////////////////// update one student
    app.put("/updateOne", (req, res) => {
      dbo
        .collection("students")
        .updateOne({ name: "mary" }, { $set: { name: "Mohini" } })
        .then(() => {
          return dbo.collection("students").findOne({ name: "Mohini" });
        })
        .then((result) => res.json(result))
        .catch((err) => res.send("failed to update one student"));
    });
    /////////////////////////////////////// update using name
    app.put("/updateStudent", (req, res) => {
      let mark = parseInt(req.query.mark);
      let name = req.query.name;
      dbo
        .collection("students")
        .updateOne({ name: name }, { $set: { mark: mark } })
        .then((result) => res.json(result))
        .catch((err) => "failed to update one student");
    });
    ///////////////////////////////////  delete one
    app.delete("/deleteOne", (req, res) => {
      let name = req.query.name;
      dbo
        .collection("students")
        .deleteOne({ name: name })
        .then(() => {
          return dbo.collection("students").find().toArray();
        })
        .then((result) => res.json(result))
        .catch((err) => res.send(`failed to delete the details of ${name}`));
    });
    //////////////////////////////////
    app.delete("/deleteUser", (req, res) => {
      let name = req.query.name;
      dbo
        .collection("students")
        .findOne({ name: name })
        .then((student) => {
          if (!student) {
            return res.send("This student is not found");
          }
          return dbo.collection("students").deleteOne({ name: name });
        })

        .then((result) => res.send(`The user named ${name}  deleted`))
        .catch((err) => res.send("deleted the item"));
    });
    ///////////////////////////////////
    app.listen(3600);
  })

  .catch((err) => {
    console.error("Failed to perform operation:", err);
  });

//.finally(() => {
//client.close().then(() => console.log("Connection closed"));
//});
