const express = require("express");
const path=require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

//Dynamic Routing
app.get("/profile/:username", (req, res) => {
  res.send("Username:   "+req.params.username);
});

app.get("/profile/:username/:age", (req, res) => {
  res.send(`Welcome ,${req.params.username} of age ${req.params.age}`);
 
});

app.listen(3000, () => {
  console.log("Sever is Runnig....");
});
