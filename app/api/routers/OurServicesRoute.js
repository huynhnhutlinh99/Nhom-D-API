module.exports = app => {
    const ourservices = require("../controllers/OurServicesController");

    app.get("/ourservices", ourservices.findAll);
    app.get("/ourservices/:ourserviceId", ourservices.findById);
    app.delete("/ourservices/:ourserviceId", ourservices.deleteById);
    app.post("/ourservices", ourservices.create);
}