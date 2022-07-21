//This  is how you can do routing with bare node js

const routes= {
    "/":function index(req,res){
        res.writeHead(200)
        res.end("hello world")

    },
    "/foo":function(req,res){
res.writeHead(200)
res.end("you are now in foo")
    }
}
require("http").createServer((req,res)=>{
    if(req.url in routes){
        return routes[req.url](req,res)

    }
    res.writeHead(400)
    res.end("route not foud")
}).listen(8800)