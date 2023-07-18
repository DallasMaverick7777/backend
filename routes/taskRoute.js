const express = require('express');
const Task = require('../model/taskModel');
const { createTask, getTask, oneTask, deleteTask, updateTask } = require('../controllers/taskController');
const router = express.Router();

router.route("/api/tasks").get(getTask).post(createTask);
router.route("/api/tasks/:id").get(getTask).delete(deleteTask).put(updateTask);





module.exports = router;


// 64b45b77030d4210314ec0bc