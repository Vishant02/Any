const fs  = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>{

    if(req.url == "/"){
        res.end("Hello from the home sides")
    }
    else if(req.url == "/about"){
        res.end("Hello from about us sides")
    }
    else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/userAPI.json`,'utf-8',(err,data)=>{
            if(data){
            console.log(data);
            res.end(data)
            }else{
                console.log(err)
            }
        })
    }
    else{
        res.end("<h1>404 error pages. Page doesn't exist</h1>")
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port 8000");
});