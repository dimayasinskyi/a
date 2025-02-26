const express = require("express");
const https = require("https");
const fs = require("fs");
const app = express();


app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { title: "Головна", username: "Дмитро" });
});

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
};

https.createServer(options, app).listen(4000, () => {
    console.log("Cервер працює на https://localhost:4000");
});