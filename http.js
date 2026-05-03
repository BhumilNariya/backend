const http=require("http")
const server=http.createServer((req,res)=>{
    res.write("Helllo")
    res.end();
})

server.listen(3000);