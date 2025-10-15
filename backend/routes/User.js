const express = require("express")
const { postUser, getUserTasks } = require("../controller/User")

const router = express.Router()

router.post("/", postUser)
module.exports = router
