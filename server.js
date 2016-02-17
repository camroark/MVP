//image server, serves static files

//Import express
var express = require('express');

//Assign express to the var 'app'
var app = express();

//Morgan is a HTTP listener that logs requests in teh console. Assign it to morgan
var morgan = require('morgan');

//Cors is a HTTP security thing.
var cors = require('cors');

//Assign a port for the server
var port = process.env.PORT || 3001;

//express.use() specifies middleware for express to use
//Morgan.tiny: Minimal output for the request (doesn't display everything)
app.use(morgan('tiny'));

//force the url name to automatically reference files in the apps folder.
//If we didnt use static, we would have to type out the file path like /app/index.html
app.use(express.static(__dirname + '/app/'));

//When refering to module references, automatically refer to node_modules folders.
//If we didnt use static, we would have to place /node_modules/ in front of every
//middleware reference
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

//Server should listen for the specified port number
app.listen(port);

//console log INSIDE CMI
console.log("Express server listening on %d in %s mode", port, app.settings.env);
