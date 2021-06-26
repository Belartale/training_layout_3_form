const express = require("express");
const app = express();

const { connectDB } = require("./connectDB");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

const start = async (params) => {
  try {
    await connectDB();

    await app.listen(PORT, () => {
      console.log(`START SERVER ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
