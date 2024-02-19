const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});
