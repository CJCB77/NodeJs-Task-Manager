const taskModel = require("../models/tasks.models")

const getTasks = async (req,res) => {
    const allTasks = await taskModel.find()
    res.json({tasks: allTasks})
}
const createTask = (req,res) => {
    const {description} = req.body
    let task = new taskModel({description: description})
    task.save()
    res.json("Creating new task: " + description)
}

const getTaskById = async (req, res) => {
    const {id} = req.params
    const task = await taskModel.findById(id).exec()
    res.json({task: task})
}

const updateTask = async (req, res) => {
    const {id} = req.params
    const {description} = req.body
    const task = await taskModel.findByIdAndUpdate(id, {description:description})
    res.json({updated:task})
}

const deleteTask = async (req, res) => {
    const {id} = req.params
    const task = await taskModel.findByIdAndDelete(id)
    res.json({deleted: task})
}

module.exports = {
    getTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
}