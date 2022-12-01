const path = require("path");
const express = require("express");

// hien thi request tu client, khi refresh se hien thi log trong terminal
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const route = require("./routes");
const db = require("./config/db");

// Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// middleware
app.use(
    express.urlencoded({
        extended: true,
    })
); // middleware cho form html
app.use(express.json()); // middleware gửi từ code js
// urlencoded() và json() ở trên được lấy từ thư viện body-parser - đã đc tích hợp sẵn vào express từ phiên bản 4.16

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Template engine
app.engine(
    ".hbs",
    handlebars.engine({
        extname: ".hbs",
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// app.get('/', (req, res) => {
//     res.render('home');
// })
// app.get('/news', (req, res) => {
//     res.render('news');
// })
// app.get('/search', (req, res) => {
//     res.render('search');
// })
// app.post('/search', (req, res) => {
//     console.log(req.body);
//     res.send('');
// })

// routes init
route(app);

app.listen(port, () => {
    console.log(
        `Example app listening at port ${port}. http://localhost:${port}`
    );
});
