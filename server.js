var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3001, function() {
    console.log("Server Running on port 3000.");
});