const express = require("express")
const app = express()
const addTaskRouter = require("./routes/addTask");
//const editTaskRouter = require("./routes/editTask");
const deleteTaskRouter = require("./routes/deleteTask");
const path = require('path')
const task = require("./model/Task");


app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
    const tasks = await task.find();
    res.render("todo.ejs", { tasks });
});

app.use("/addTask", addTaskRouter);
//app.use("/editTask/:id", editTaskRouter);
app.use("/deleteTask", deleteTaskRouter);

module.exports = app