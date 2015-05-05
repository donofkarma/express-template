"use strict";

var express = require('express');
var router = express.Router();

// set the path for the static assets
router.use('/assets', express.static('_site/assets'));


// Homepage
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Home'
    });
});


// Test error pages
router.get('/404', function(req, res, next) {
    // trigger a 404 since no other middleware
    // will match /404 after this one, and we're not
    // responding here
    next();
});
router.get('/403', function(req, res, next) {
    // trigger a 403 error
    var err = new Error('Not allowed!');
    err.status = 403;
    next(err);
});
router.get('/500', function(req, res, next) {
    // trigger a generic 500 error
    var err = new Error('keyboard cat!');
    err.status = 500;
    next(err);
});


module.exports = router;
