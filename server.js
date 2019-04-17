var express = require("express");
const bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
  });