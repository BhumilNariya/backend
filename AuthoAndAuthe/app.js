const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const bcrypt=require("bcrypt");



app.use(cookieParser());

app.get("/",(req,res)=>{

    bcrypt.genSalt(10, function(err, salt) {
        console.log("Salt is :",salt);
    bcrypt.hash("BhumiLNAriya", salt, function(err, hash) {
        console.log("hash Value is :",hash);
        
    });
    });

    res.cookie("name","bhumilnariya");
    res.send("done");
})
app.get("/read",(req,res)=>{
    bcrypt.compare("BhumiLNAriya","$2b$10$NuF9QdEcNrVuNgnDmMPJq.BREdoIU2MygSjEzhRrL0a1k6ZnDpIt6" ).then(function(result) {
        console.log("Result is :",result);
        
});
    console.log("Cookie value is :",req.cookies);

    res.send("Read page");

    
})

app.listen(3000,function(){
    console.log("Server is Runnging..");
})