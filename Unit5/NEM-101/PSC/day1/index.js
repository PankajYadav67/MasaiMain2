// comsole.log("welcome to nem-101");

// callback function - funtion which is passed as argument to other function

//high order function - function which accept callback function as an argument

// const arr = [1,2,3];

// // arr.forEach((ele)=>{
// //     console.log(ele+2);
// // })

// function sum(a, b, somefunc) {
//   const result = a + b;
//   somefunc(result);
// }

// sum(5, 6, console.log);

// const {x} = require("./test.js");

const path = require("path")
const fs = require("fs");

fs.readFile(path.join(".","test.js"),{encoding: "utf-8"},(data,err)=>{
    if(err){
        console.log("error is :-",err);
    }
    console.log(data)
});

// console.log("this last sentence");


// const os =require("os");
// console.log(os.cpus()[0].model);