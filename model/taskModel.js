const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {  type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
}, { timestamps: true });

const Task = mongoose.model('task', taskSchema);

module.exports = Task;