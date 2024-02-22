const task = require('../model/Task')

const editTask = async (req, res) => {
    const taskId = req.params.id
    const tasks = await task.find();
    res.render("todoEdit", { tasks, taskId })
}

const editedTask = async (req, res) => {
    const updatedContent = req.body.content
    const taskId = req.params.id
    await task.updateOne({ _id: taskId }, { content: updatedContent });
    res.redirect("/");
}

module.exports = { editTask, editedTask }