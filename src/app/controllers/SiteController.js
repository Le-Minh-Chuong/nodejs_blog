const Course = require("../models/Course");
const { multiMongooseToObject } = require("../../util/mongoose");
class SiteController {
    // [GET] /
    index(req, res, next) {
        // res.render('home');

        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         //? Khi có lỗi xảy ra thì gọi func next() và truyền err vào
        //         //? next() sẽ đẩy err vào 1 middleware bên ngoài và ta sẽ tập trung xử lý lỗi ở 1 nơi
        //         next(err);
        //     }
        // })
        Course.find({}).lean()
            .then((courses) => {
                res.render("home", { courses });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
