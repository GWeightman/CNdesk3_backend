const { Router } = require("express");
const job_router = Router()
const { add_job, delete_job, update_job, list_job, list_all, list_available, devname_update } = require("./jobs_controller")

job_router.post("/jobs", add_job);
job_router.delete("/jobs", delete_job)
job_router.put("/jobs", update_job)
job_router.get("/jobs/:username", list_job)
job_router.get("/jobs", list_all)
job_router.post("/jobs/:username", list_available)
job_router.put("/jobs/:username", devname_update)

module.exports = job_router