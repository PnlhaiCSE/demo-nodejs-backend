require('dotenv').config();
const express = require('express');
const app = express();
const webRouter = require('./route/web.router');
const viewEngine = require('./config/config.viewEngine');

const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', webRouter);

viewEngine(app);

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`);
})