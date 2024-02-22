const express = require("express");
const router = express.Router();
const deleteTask = require("../controllers/deleteTaskController");

router.get("/:id", deleteTask);

module.exports = router;
