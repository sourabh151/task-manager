const { User } = require("../model/User.js");

const getUserTasks = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.query.email });
    // console.log(req.query)
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    res.json(user.tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const postTask = async (req, res) => {
  const { email, name, completed } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user == null) {
      user = await User.create({ email, tasks: [] });
    }
    user.tasks.push({ name, completed });
    await user.save();
    res.status(201).json(user.tasks.slice(-1)[0]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const { email, taskId, name, completed } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    const task = user.tasks.id(taskId);
    if (task == null) {
      return res.status(404).json({ message: 'Cannot find task' });
    }
    if (name != null) {
      task.name = name;
    }
    if (completed != null) {
      task.completed = completed;
    }
    await user.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  console.log(req.body)
  const { email, taskId } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    const task = user.tasks.id(taskId);
    if (task == null) {
      return res.status(404).json({ message: 'Cannot find task' });
    }
    user.tasks.pull(task._id);
    await user.save();
    res.json({ message: 'Deleted task' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserTasks, postTask, updateTask, deleteTask };
