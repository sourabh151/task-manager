const express = require("express")
const app = express()
const userRoute = require("./routes/User.js")

app.get("/api/v1/user/", userRoute)

app.listen(5000, () => {
  console.log("listening on port 5000")
})
