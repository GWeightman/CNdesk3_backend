const Jobs = require("./jobs_model")

exports.add_job = async (req, res) => {
    try {
        const job_entry = await Jobs.create(req.body)
        res.status(201).send({ message: "Successfully added", job_entry })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "check server logs" })
    }
};

exports.delete_job = async (req, res) => {
    try {
        const job_entry = await Jobs.deleteOne({clientname: req.params.clientname})
        res.status(200).send({ message: "Successfully deleted", job_entry })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "check server logs" })
    }
}

exports.list_job = async (req, res) => {
    try {
      const job_entry = await Jobs.find({ clientname: req.params.clientname });
      res.status(200).send(job_entry);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Check server logs" });
    }
  };
  
  exports.update_job = async (req, res) => {
    try {
      const job_entry = await Jobs.updateOne(
        { clientname: req.body.clientname },
        { $set: { job_description: req.body.job_description } },
        { new: true }
      );
      res.status(200).send({ message: "Success", job_entry });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Check server logs" });
    }
  };

  exports.list_all = async (req, res) => {
    try {
      const job_entry = await Jobs.find();
      res.status(200).send(job_entry);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Check server logs" });
    }
  };