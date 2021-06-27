const express = require("express");
const app = express();
const path = require("path");
// const mongoose = require("mongoose");
const { connectDB } = require("./server/connectDB");

const uploadToUser = require("./server/routers/uploadToUser");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(uploadToUser);

const start = (params) => {
  try {
    app.listen(PORT, () => {
      console.log(`START SERVER ${PORT}`);
      connectDB();
    });
  } catch (error) {
    console.log(error);
  }
};

start();
