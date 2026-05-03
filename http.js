const http=require("http")
const server=http.createServer((req,res)=>{
    res.write("Helllo")
    res.end("Hello https");
})

server.listen(3000,()=>{
    console.log("server is running");
});