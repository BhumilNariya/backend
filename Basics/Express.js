const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("Middelware is running...");
  next();
});
app.use((req, res, next) => {
  console.log("Next Middelware is running...");
  next();
});
app.get("/", (req, res) => {
  res.send("Hello  Nodemon,this is Home Page");
});
app.get("/Profile", (req, res, next) => {
  return next(new Error("Sonething Get Wrong!!!"));
});

app.use((req, err, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .send(
      "Something went wrong and we don't know things plase try again sometime later!!!!",
    );
});

app.listen(3000, () => {
  console.log("server is Running....");
});
