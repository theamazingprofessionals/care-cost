const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path")

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Static directory
app.use(express.static(path.join(__dirname, '/public'), {
    index: false,
    extensions: ['html']
}));



//just for testing ajax calls temporarily
app.get('/', function (req, res) {
    res.sendFile('test.html', {
        root: __dirname + "/public"
    });
});



//handlebars 
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Routes
require("./controllers/api-routes.js")(app);
//require("./controllers/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({
    force: false
}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
