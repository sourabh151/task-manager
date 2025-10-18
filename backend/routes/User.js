const express = require("express");
const {
  getUserTasks,
  postTask,
  updateTask,
  deleteTask,
  deleteAllTasks
} = require("../controller/User.js");

const router = express.Router();

router.get("/tasks", getUserTasks);

router.post("/tasks", postTask);

router.patch("/tasks", updateTask);

router.delete("/tasks/:taskId", deleteTask);
router.delete("/tasks/", deleteAllTasks);

module.exports = router;
