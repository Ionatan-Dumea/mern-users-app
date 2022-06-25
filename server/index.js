const express = require("express");
// connect this api to react frontend without any errors
const cors = require("cors");
// connecting to our mongo db
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
  "mongodb+srv://ionatandumea01:pwDREUBuVW8cWb5@cluster0.t54kfnb.mongodb.net/merntutorial?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.listen(3001, () => {
  console.log("Server runs perfectly V2");
});
