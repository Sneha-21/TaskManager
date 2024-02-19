const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  content: {
    type: String,
  },

  lastModified: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", taskSchema);
