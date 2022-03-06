const express = require("express")
const config = require("./config")
const morgan = require("morgan")
const taskRoutes = require("./routes/tasks.routes")
const connectDB = require("./db/connect")

require("dotenv").config()

const app = express()

//Using middlewares
app.use(morgan('tiny'))
app.use(express.json())

app.use("/tasks", taskRoutes)

const startApp = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
            .then(() => console.log("Connected succesfully to the database"))
            .then(() => app.listen(config.PORT, console.log(`Server is listening on port ${config.PORT}`)))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error)
    }
}

startApp()






