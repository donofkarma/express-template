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
3. default: this will run the test and then compile the css

Changelog
---------------------

### 0.4.0
- Removing some CSS files for cleaner build process

### 0.3.4
- Updating to final releases for GruntJS 0.4.0

### 0.3.3
- Updating grunt and plugins to latest release candidates
- Changing build path from dist/ to deploy/
- Changing minified CSS filenames
- Updating .gitignore
- Stripping deployment grunt tasks to streamline the template

### 0.3.2
- Moved Sass files to their own folder
- Renamed Sass partials

### 0.3.1
- Upgraded grunt to 0.4.0
- Added packages.json file
- Updating jQuery version to 1.8.3

### 0.3.0
- Added Jasmine TDD framework to grunt.js
- Added grunt.js build process for JS concatenation and minification
- Added grunt.js build process for CSS minification
- Added SASS integration (with _globals.scss for vars and mixins)

### 0.2.0
- Split common sections into SSIs for multiple page setups

### 0.1.1
- Adding favicon and apple-touch-icon options
- Adding IE rendering meta info

### 0.1
- Adding initial code

License
---------------------

MIT: [https://github.com/donofkarma/html-css-js-template/blob/master/LICENSE-MIT](https://github.com/donofkarma/html-css-js-template/blob/master/LICENSE-MIT)