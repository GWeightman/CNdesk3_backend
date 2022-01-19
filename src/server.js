require("./db/connection")
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
const user_router = require("./user_info/user_routes")
const job_router = require("./jobs_info/jobs_routes")

app.use(express.json())
app.use(cors())
app.use(user_router)
app.use(job_router)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})