"use strict";

/* Dependencies */
var express = require('express');
// express middleware dependencies
var expressBodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars')
var expressMethodOverride = require('method-override');
var expressMorgan = require('morgan');
var app = express();
// modules
var router = require('./app/router');


/* Configure App */
// set the port number to listen to
app.set('port', process.env.PORT || 3000);
// create `ExpressHandlebars` instance with a default layout
var hbs = expressHandlebars.create({
    defaultLayout: 'layout',
    extname: '.hbs',
    partialsDir: [ 'views/partials/' ]
});
// set the template engine to handlebars
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
// start the logger for requests
app.use(expressMorgan('short'));
// object containing the parsed request body
app.use(expressBodyParser.text());
// simulates DELETE and PUT form methods
app.use(expressMethodOverride());


/* Routes */
app.use(router);


/* Server Errors */
// 404
app.use(function(req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.render('404', { url: req.url });
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});
// 500
app.use(function(err, req, res, next) {
    // we may use properties of the error object
    // here and next(err) appropriately, or if
    // we possibly recovered from the error, simply next().
    res.status(err.status || 500);
    res.render('500', { error: err });
});


/* Server */
app.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});
