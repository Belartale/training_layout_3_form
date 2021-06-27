const mongoose = require("mongoose");

// mongodb+srv://admin:<password>@cluster0.lnkcs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

function connectDB() {
  new mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.lnkcs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
}

module.exports = { connectDB };

// mongoose.connect(
//   "mongodb+srv://admin:admin@cluster0.0ngfg.mongodb.net/beautiful_form?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: false,
//   }
// );
