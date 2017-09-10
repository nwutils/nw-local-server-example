// Import and run the Express Node web server framework
var express = require('express');
var app = express();

// Point it to the current directory as a static server
app.use(express.static('.'));

// Listen on port 3000 for any traffic
app.listen(3000);
