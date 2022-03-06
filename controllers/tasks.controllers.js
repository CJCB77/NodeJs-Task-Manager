const getTasks = (req,res) => {
    res.json({tasks: []})
}
const createTask = (req,res) => {
    res.json("This is POST")
}

const getTaskById = (req, res) => {
    taskId = req.params
    res.json({id:taskId})
}

const updateTask = (req, res) => {
    taskId = req.params
    res.json({id:taskId})
}

const deleteTask = (req, res) => {
    taskId = req.params
    res.json({id:taskId})
}

module.exports = {
    getTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
}