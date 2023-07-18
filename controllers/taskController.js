const Task = require("../model/taskModel");

//Create a task
const createTask = async (req, res) => {
//console.log(req.body);
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

//Get all tasks
const getTask = async (req, res) => {
    try {
        const task = await Task.find({});
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
    
};
//Get single task
const oneTask = async (req, res) => {
    try { 
         const { id } = req.params; 
         const task = await Task.findById(id);
         if(!task) {
                return res.status(404).json({ msg: `No task with id: ${id}` });
         } 
         res.status(200).json(task)  
     } catch (error) {
            res.status(500).json({ msg: error.message });
     }

};

//Delete task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task) {
            return res.status(404).json({ msg: `No task with id: ${id}` });
         } 
         res.status(200).json({ msg: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

//Update task

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate( {_id: id}, req.body, { new: true, runValidators: true });
        if(!task) {
            return res.status(404).json({ msg: `No task with id: ${id}` });
         } 
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

module.exports = { createTask, getTask, oneTask, deleteTask, updateTask };