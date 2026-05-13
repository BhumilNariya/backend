const express = require("express");
const app = express();
const userModel = require("./userModel");

app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "Bhumil",
    username: "BhumillNariya",
    email: "Bhumil@gmail.com",
  });

  res.send(createdUser);
});
app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate({name:"Bhumil"},{username:"Phoenix  "},{new:true});

  res.send(updatedUser);
});

app.get("/read",async (req,res) => {
        let users=await userModel.find({name:"Bhumil"});
        res.send(users);

    
})
app.get("/delete",async (req,res) => {
        let users=await userModel.findOneAndDelete({name:"Bhumi"});
        res.send(users);

    
})

app.listen(3000);
