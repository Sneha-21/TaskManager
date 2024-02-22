const task = require("../model/Task");

const deleteTask = async (req, res) => {
  const taskID = req.params.id;
  console.log(taskID);

  try {
    await task.findByIdAndDelete(taskID);
    res.redirect("/");
  } catch (error) {
    res.redirect("/");
  }
};

module.exports = deleteTask;
