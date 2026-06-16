const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('test');
}

const getLongHai = (req, res) => {
    return res.send('PnlhaiCSE | IUH');
}

const getABC = (req, res) => {
    return res.send('ABC ABC ABC');
}

const getForm = (req, res) => {
    return res.render('form');
}

const postNewUser = (req, res) => {
    console.log(">>>check: ", req.body);
    let { email, name, city } = req.body;

    try {
        connection.query(
            `INSERT INTO Users (email, name, city)
            VALUES(?, ?, ?)`,
            [email, name, city]
        );

    } catch (err) {
        console.log(err);
    }
    return res.send("Create success");
}


module.exports = { getHomePage, getLongHai, getABC, getForm, postNewUser }