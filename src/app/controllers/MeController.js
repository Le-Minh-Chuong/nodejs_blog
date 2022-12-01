const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class MeController {
    // [GET] /me/courses/stored
    stored(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => {
                res.render("me/stored-courses", { courses });
            })
            .catch(next);
    }
}

module.exports = new MeController();
