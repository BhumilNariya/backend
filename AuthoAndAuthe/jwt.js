const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");


app.use(cookieParser());

app.get("/",(req,res)=>{
        let token=jwt.sign({email:"Bhumil@test.com"},"SecretKey");
        console.log("token value is :",token);
        res.cookie("token",token);
        res.send("done");
})
app.get("/read",(req,res)=>{

    let data=jwt.verify(req.cookies.token,"SecretKey");
    console.log("data value is :",data   );

    res.send("Read page");

    
})

app.listen(3000,function(){
    console.log("Server is Runnging..");
})