const mongoose = require("mongoose");

// mongodb+srv://admin:<password>@cluster0.lnkcs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

function connectDB() {
  mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.lnkcs.mongodb.net/beautiful_form",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log(`____CONNECT____`);
}

module.exports = { connectDB };

// mongoose.connect(
//   "mongodb+srv://admin:admin@cluster0.0ngfg.mongodb.net/beautiful_form?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: false,
//   }
// );
