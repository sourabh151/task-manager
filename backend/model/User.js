const mongoose = require('mongoose');
const { taskSchema } = require("./Task.js")


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  tasks: [taskSchema]  // Array of task subdocuments
});

const User = mongoose.model('User', userSchema);

module.exports = { User };

