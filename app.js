// *****&&&&*****
const bodyParser = require("body-parser")
const express = require("express");
const fs = require('fs');
//^^^^^^***controllers***^^^^^^
const loginController = require('./controllers/login_controller.js');
////////////
const app = express();
const port = 3005;
const server = app.listen(port);

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get requests
app.get("/", (req, res) => {
    res.render('login')
});
//post requests
app.post('/login', loginController)

app.use((req, res) => {
    res.send("error 404 not found");
});