const task = require("../model/Task");

const addNewTask = async (req, res) => {
  const { content } = req.body;

  try {
    await task.create({ content });
    res.redirect("/");
  } catch (error) {
    res.redirect("/");
  }
};

module.exports = addNewTask;
