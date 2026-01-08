const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res) => {
    try {
        const { title, dueDate } = req.body;

        if (!title || !dueDate) {
            return res
                .status(400)
                .json({ message: "Title and Due Date are required" });
        }

        const task = await Task.create({
            title,
            dueDate,
            ...req.body,
        });

        res.status(201).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

// Get All Tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

// Update Task (status / title / dueDate)
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

// Delete Task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
