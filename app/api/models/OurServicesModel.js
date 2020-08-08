const sql = require('./db.js');

// Tạo hàm khởi tạo sinh viên

const OurServices = function(ourservices) {
    this.title = ourservices.title;
    this.desc = ourservices.desc;
    this.ImageUrl = ourservices.ImageUrl;
}

// lấy tất cả các sinh viên
OurServices.getAll = result => {
    sql.query("SELECT * FROM ourservices", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("ourservices: ", res);
        result(null, res);
    });
};
// tìm ourservices theo id
OurServices.findById = (ourserviceId, result) => {
    sql.query(`SELECT * FROM ourservices WHERE id = ${ourserviceId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        // nếu tìm được ourservices
        if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
        }

        // không có id được tìm thấy
        result({ kind: "not_found" }, null);
    });
};
//tạo ourservices mới
// OurServices.create = (newOurServices, result) => {
//     sql.query("INSERT INTO ourservices SET ?", newOurServices, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }
//         console.log("Creat ourservices: ", { id: res.insertId, ...OurServices });
//         result(null, { id: res.insertId, ...OurServices });
//     });
// };

//xoá một OurServices theo id
OurServices.remove = (id, result) => {
    sql.query("DELETE FROM ourservices WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted ourservices with id: ", id);
        result(null, res);
    });
};

//tạo sinh viên mới
OurServices.create = (newService, result) => {
    sql.query("INSERT INTO ourservices (Name,Des,ImageUrl) VALUES ('"+ newService.Name +"','"+ newService.Desc +"','" + newService.ImageUrl +"')", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Creat student: ", { id: res.insertId, ...newService });
        result(null, { id: res.insertId, ...newService });
    });
};
module.exports = OurServices;