const express = require("express");
const https = require("https");
const fs = require("fs");
const app = express();


app.use(express.static("myproject/public"));

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//     res.render("index", { title: "Головна", username: "Дмитро" });
// });

const options = {
    key: fs.readFileSync("myproject/key.pem"),
    cert: fs.readFileSync("myproject/cert.pem"),
};

https.createServer(options, app).listen(process.env.PORT || 4000, () => {
    console.log("Cервер працює на https://myprojects-1bpt.onrender.com");
});
