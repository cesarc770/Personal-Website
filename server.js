const express = require('express');
var bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static directory
app.use(express.static("public"));

//import routes
require('./routes/htmlRoutes')(app);


app.listen(PORT);