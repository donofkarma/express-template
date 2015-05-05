var Template = (function() {

    "use strict";

    var $ = require('jquery');
    var Boilerplate = require('./modules/boilerplate');

    $(function() {
        console.log('script.js running...');

        var boilerplate = new Boilerplate();
    });

})();
