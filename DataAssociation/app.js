const express=require("express");
const app=express();
const userModel=require("../DataAssociation/model/user");
const postModel=require("../DataAssociation/model/post");

app.get("/",(req,res)=>{
    res.send("Welcome");
});
app.get("/create",async (req,res)=>{
    let user=await userModel.create({
        username:'Bhumil',
        email:"Bhumil@gmail.com",
        age:20,
    })
    res.send(user);
});
app.get("/post/create",async (req,res)=>{
    let post=await postModel.create({
        postdata:"Hello Welcome User",
        user:"6a0307d8d0d8e98f89d2ebb6",
    })

    let user=await userModel.findOne({_id:"6a0307d8d0d8e98f89d2ebb6"})
    user.posts.push(post._id);
    await user.save();

    res.send({post,user});
});

app.listen("3000",function(){
    console.log("Server is Running...");
})