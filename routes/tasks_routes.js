const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    res.json("This is GET")
})

router.post("/", (req, res) => {
    res.json("This is POST")
})

router.get("/:task_id", (req, res) => {
    res.json("This is GET task_id")
})
router.post("/:task_id", (req, res) => {
    res.json("This is POST task_id")
})

module.exports = router
