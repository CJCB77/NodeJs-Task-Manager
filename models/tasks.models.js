const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    description: String,
    completed: {
        type: Boolean,
        default: false
    },
    creation_date : {
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Task', taskSchema)
