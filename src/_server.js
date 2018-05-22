'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = {
    app: function () {
        const app = express();
        const indexPath = path.join(__dirname, '../public/index.html');
        const publicPath = express.static(path.join(__dirname, '../public'));

        app.use(express.static(__dirname + '../public'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use('/', publicPath);

        app.get('*', function (request, response) {
            response.sendFile(path.join(__dirname, '../public/index.html'))
        })

        return app;
    }
}