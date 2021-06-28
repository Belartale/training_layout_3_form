const express = require("express");
const app = express();
const path = require("path");
const chalk = require("chalk");
// const mongoose = require("mongoose");
const { connectDB } = require("./server/connectDB");

const uploadToUser = require("./server/routers/uploadToUser");
const singUp = require("./server/routers/singUp");
// app.set("views", "views");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(uploadToUser);
app.use(singUp);

app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));

const start = (params) => {
  try {
    console.log(chalk.green(path.join(__dirname)));
    app.listen(PORT, () => {
      console.log(`START SERVER ${PORT}`);
      connectDB();
    });
  } catch (error) {
    console.log(error);
  }
};

start();
