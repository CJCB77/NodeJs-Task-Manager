const express = require("express")
const config = require("./config")
const taskRoutes = require("./routes/tasks.routes")

const app = express()
app.use("/tasks", taskRoutes)


app.listen(config.PORT, console.log(`Server is listening on port ${config.PORT}`))


