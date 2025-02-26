const express = require("express");
const https = require("https");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("myproject/public"));

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//     res.render("index", { title: "Головна", username: "Дмитро" });
// });

const options = {
    key: fs.readFileSync("myproject/key.pem"),
    cert: fs.readFileSync("myproject/cert.pem"),
};

https.createServer(options, app).listen(port, '0.0.0.0', () => {
  console.log(`Сервер працює на https://0.0.0.0:${port}`);
});
