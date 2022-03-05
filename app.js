const express = require("express")
const config = require("./config")
const taskRoutes = require("./routes/tasks_routes")

const app = express()
app.use("/", taskRoutes)


app.listen(config.PORT, console.log(`Server is listening on port ${config.PORT}`))


