require('dotenv').config();
const express = require('express');
const app = express();
const webRoute = require('./route/webRouter');
const configViewEngine = require('./config/viewEngine');
const methodOverride = require('method-override');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config json parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

configViewEngine(app);

app.use("/", webRoute);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});