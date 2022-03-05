const getTasks = (req,res) => {
    res.json("This is GET")
}
const createTask = (req,res) => {
    res.json("This is POST")
}

const getTaskById = (req, res) => {
    res.json("This is GET task_id")
}

const updateTask = (req, res) => {
    res.json("This is PUT task_id")
}

const deleteTask = (req, res) => {
    res.json("This is DELETE task_id")
}

module.exports = {
    getTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
}