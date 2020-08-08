const OurServices = require("../models/OurServicesModel.js");


//find all OurServices
exports.findAll = (req, res) => {
    OurServices.getAll((err, data) => {
        if (err)
            res.status(500).send({
                massage: err.massage || "Some error occurred while retrieving OurServices"
            });
        else res.send(data);
    });
};
//Find by ID
exports.findById = (req, res) => {
    OurServices.findById(req.params.ourserviceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found OurServices with id ${req.params.ourserviceId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving OurServices with id " + req.params.ourserviceId
                });
            }
        } else res.send(
            data);
    });
};

//Create OurServices
exports.create = (req, res) => {

    // Create a Student
    const ourservices = new OurServices({
        title: req.query.title,
        desc: req.query.desc,
        ImageUrl: req.query.ImageUrl
    });

    // Save Student in the database
    OurServices.create(ourservices, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the ourservices."
            });
        else res.send(data);
    });
};

//xoá our services theo id
exports.deleteById = (req, res) => {
    OurServices.remove(req.params.ourserviceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    massage: `Not found OurServices with id ${req.params.ourserviceId}`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete OurServices with id " + req.params.ourserviceId
                });
            };
        } else res.send({ message: `OurServices was deleted successfully!` });
    });
};

//create 

exports.create = (req, res) => {
    // Validate request
    // if (!req.query) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    // }

    // Create a Student
    const newOurServices = {
        Name: req.body.name,
        Desc: req.body.desc,
        ImageUrl: req.body.img,
       
    };


    // Save Student in the database
    OurServices.create(newOurServices, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the OurServices."
            });
        else res.send(data);
    });
};
