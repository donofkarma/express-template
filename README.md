Express Template
====================

After getting bored of setting up the same prototyping framework over and over again, I decided to create this template. The main idea behind it is to make prototyping quick and easy.

Feel free to use it as you wish. If you find any nice ways to improve it submit a pull request.


Getting started
---------------------

### Installation

To use this template you need [Node.js](http://nodejs.org/download/) (min v4.4.4). This template does also support [nodemon](http://nodemon.io/), a handy tool to restart the Node.js server when you make changes to files.

Once this is set up, install the template dependencies by running `npm install`.

### The server

To start the server using nodemon run `nodemon app.js` from the root of the repository. Alternatively you can use `node app.js` to run normally.

### Build/deployment/watch tasks

These tasks are performed using NPM tasks:

* Build: `npm run build`
* Deploy: `npm run deploy`
* Serve: (build the front-end assets, start the server and watch for file changes):
    * Nodemon server: `npm run serve`
    * Node server: `npm run serve:node`


Release History
---------------------

For a full release history, see the [Changelog](https://github.com/donofkarma/express-template/blob/master/CHANGELOG.md).

License
---------------------

MIT: [https://github.com/donofkarma/express-template/blob/master/LICENSE](https://github.com/donofkarma/express-template/blob/master/LICENSE)
