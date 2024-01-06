const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/web16");

// 1. connecting to db
// const ConnectDb = async () => {
//   const conn = await connection;
//   console.log("Connection has successfully created.");

//   // const student1 = new StudentModel({
//   //   name: "Jill",
//   //   age: 20,
//   //   city: "la",
//   //   hobbies : ["coding","doing nothing"]
//   // });
//   // const saveStudent = await student1.save();
//   // console.log("save request done.");

//   const student = await StudentModel.find({}, { _id: 0, __v: 0 });
//   console.log(student);
//   conn.disconnect();
// };

// ConnectDb();

// 2. creating schema
//schema
const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: Number, //by default it is required false
  city: { type: String, required: false }, //you can make the required false by writing this
  hobbies: { type: [String], required: true },
});

//model
const StudentModel = mongoose.model("student", studentSchema);
