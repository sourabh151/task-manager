const { User } = require("../model/User.js");

const postUser = async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const user = await User.create({
      email: req.body.email
    });
    return res.status(201).json({ "success": true, id: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getUserTasks = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    res.json(user.tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { postUser, getUserTasks };
