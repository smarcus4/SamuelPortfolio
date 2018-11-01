const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");


const PORT = 3000
const app = express();

app.use("/public", express.static(path.join(__dirname, "public")));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("./public/index.html");

});


app.post("/send", (req, res) => {
    console.log(req.body);
})



app.listen(PORT, () => console.log("server running on " + PORT))