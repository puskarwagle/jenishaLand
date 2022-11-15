// Load Node modules
var express = require('express');
const ejs = require('ejs');
const port = 8080

// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on


app.listen(port, () => {
    console.log(`App is now listening on: http://localhost:${port}`)
})

// Route Route
app.get('/', function (req, res) {
    var name = "Louise";
    // Render index page
    res.render('pages/index', {
        // EJS variable and server-side variable
        name: name
    });
});

app.get('/login', function (req, res) {
    res.render('pages/login', {
    });
});
