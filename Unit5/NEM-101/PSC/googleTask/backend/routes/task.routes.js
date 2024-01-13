const { Router } = require("express");
const TaskModel = require("../models/Task");
const taskRouter = Router();

taskRouter.get("/:userId/tasks", async (req, res) => {
    const userId = req.params.userId;
    const tasks = await TaskModel.find({ userId });
    res.send(tasks);
});

taskRouter.post("/:userId/tasks", async (req, res) => {
    const userId = req.params.userId;
    let payload = {
        ...req.body,
        userId
    };

    try {
        // Create a new task instance
        const task = new TaskModel(payload);

        // Save the task to the database
        const savedTask = await task.save();

        res.status(201).send(savedTask);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Something went wrong" });
    }
});

module.exports = taskRouter;
