const express = require('express')
const router = express.Router()
const { editTask } = require("../controllers/editTaskController");
const { editedTask } = require("../controllers/editTaskController")

router.route("/:id")
    .get(editTask)
    .post(editedTask)

module.exports = router
