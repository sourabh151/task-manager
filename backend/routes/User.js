const express = require("express");
const {
  getUserTasks,
  postTask,
  updateTask,
  deleteTask,
} = require("../controller/User.js");

const router = express.Router();

router.get("/tasks", getUserTasks);

router.post("/tasks", postTask);

router.patch("/tasks", updateTask);

router.delete("/tasks", deleteTask);

module.exports = router;
