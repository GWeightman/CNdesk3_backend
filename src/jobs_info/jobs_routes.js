const { Router } = require("express");
const job_router = Router()
const { add_job, delete_job, update_job, list_job, list_all } = require("./jobs_controller")

job_router.post("/jobs", add_job);
job_router.delete("/jobs/:clientname", delete_job)
job_router.put("/jobs", update_job)
job_router.get("/jobs/:clientname", list_job)
job_router.get("/jobs", list_all)

module.exports = job_router