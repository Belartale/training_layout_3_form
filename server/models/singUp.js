const { Schema, model } = require("mongoose");

const schema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = model("users", schema);
