const express = require("express");
const mongoose = require("mongoose");

// mongodb+srv://admin:admin@cluster0.0ngfg.mongodb.net/beautiful_form?retryWrites=true&w=majority

const connectDB = () => {
  return mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.0ngfg.mongodb.net/beautiful_form?retryWrites=true&w=majority"
  );
};

module.exports = connectDB;

// mongoose.connect(
//   "mongodb+srv://admin:admin@cluster0.0ngfg.mongodb.net/beautiful_form?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: false,
//   }
// );
