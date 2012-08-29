/**
* HTML/CSS/JS Template
*
* @version	0.1
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @require	jquery 1.8.0
* @license	MIT
**/

/*jslint eqeqeq: true, undef: true */
/*global $, window, console, alert */

var Template = Template || {};

Template = (function() {
	// PRIVATE VARIABLES

	// PRIVATE FUNCTIONS

	// PUBLIC METHODS
	return {
		init: function() {
			// set js enabled class
			$('html').removeClass('no-js').addClass('has-js');
		}
	};
}());

// ON DOM READY
$(function() {
	Template.init();
});