const mongoose = require("mongoose")

const job_schema = new mongoose.Schema({
    clientname: {
        type: String,
        required: true,
    },
    contact_number: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
    },
    language: {
        type: String,
    },
    pay_range: {
        type: Number,
    },
    job_description: {
        type: String,
        required: true,
    },
    dev_name: {
        type: String
    }
})



const Jobs = mongoose.model("Job", job_schema)

module.exports = Jobs