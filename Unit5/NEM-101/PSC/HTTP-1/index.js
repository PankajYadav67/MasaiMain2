const http = require("http");

const server = http.createServer((req,res)=>{

    
    //Handler
    // if(req.url==="/file"){
    //     return 
    // }
    if(req.url === "/web"){
        return res.end('<h1>checking this working or not!</h1>');
    }
    res.write("hello");
    res.write("  world");
    
    res.end("!");
})

server.listen(8080, ()=>{  // port number 
    console.log("server started on localhost:8080");
}) 

