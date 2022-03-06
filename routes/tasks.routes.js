const express = require("express")
const taskCtrl = require("../controllers/tasks.controller")

const router = express.Router()

router.route('/').get(taskCtrl.getTasks)
                 .post(taskCtrl.createTask)

router.route('/:id').get(taskCtrl.getTaskById)
                         .patch(taskCtrl.updateTask)
                         .delete(taskCtrl.deleteTask)





module.exports = router
