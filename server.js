const express = require('express');
var bodyParser = require("body-parser");

//setting up the server 
const app = express();
const PORT = process.env.PORT || 3000;

//using bodyParser to read JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static directory
app.use(express.static("public"));

//import routes
require('./routes/htmlRoutes')(app);


app.listen(PORT);