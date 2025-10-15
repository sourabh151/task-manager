
const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 50 },
    completed: { type: Boolean, default: false }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);
module.exports = { Task: mongoose.model("Task", taskSchema), taskSchema }
