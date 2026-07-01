const path = require('path');
const express = require('express');

const viewEninge = (app) => {
    app.use(express.static(path.join(__dirname, '../public')));

    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
}

module.exports = viewEninge;