const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const server = express();

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'njk');
server.use(routes);

nunjucks.configure('views', {
    autoescape: false,
    express: server,
    noCache: true
});


server.listen(5000, function() {
    console.log("Server is running!");

})