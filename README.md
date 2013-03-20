HTML/CSS/JS Template
====================

After getting bored of setting up the same prototyping framework over and over again, I decided to create this template. The main idea behind it is to make prototyping quick and easy.

Feel free to use it as you wish. If you find any nice ways to improve it submit a pull request!

Libraries
---------------------

This template uses (all included):
- jQuery v1.8.0
- Hammer.JS v0.6.1
- Hammer.JS jQuery plugin v0.3
- iOS Orientation Change Fix (authored by @scottjehl, rebounded by @wilto)

Getting started
---------------------

### Installation

To use this template you need [node.js](http://nodejs.org/download/) (min v0.8.0), [grunt.js](https://github.com/gruntjs/grunt/wiki/Getting-started) (min v0.4.0), Ruby and Sass (both for the sass task, [instructions here](https://github.com/gruntjs/grunt-contrib-sass#the-sass-task)).

Once this is set up, you need to install the additional grunt.js dependencies for the template. To do this, run the following in the downloaded root folder:

`npm install`

### Usage

1) Run the grunt Sass task to compile the included .scss files. This way you won't get 404 errors when loading the project for the first time:

`grunt sass`

2) Run the grunt watch task to automatically compile the .scss files and lint the .js when you make changes:

`grunt watch`

3) Write code!

### Using the build tasks

There are 2 build tasks included in the Gruntfile:

`grunt (test)`

1. test: this will run the jasmine tests and lint the JS
2. default: this will run the test and then compile the css

Release History
---------------------

For a full release history, see the [https://github.com/donofkarma/html-css-js-template/blob/master/CHANGELOG.md](Changelog).

License
---------------------

MIT: [https://github.com/donofkarma/html-css-js-template/blob/master/LICENSE-MIT](https://github.com/donofkarma/html-css-js-template/blob/master/LICENSE-MIT)