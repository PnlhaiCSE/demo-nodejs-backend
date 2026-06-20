const connection = require('../config/database');
const { getAllUsers, postCreateUser } = require('../services/CRUD.services');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    // console.log(results);

    res.render('homePage.ejs', { users: results });
}

// test route
// const getLongHai = (req, res) => {
//     res.send('PnlhaiCSE | IUH');
// }
// const getABC = (req, res) => {
//     res.send('ABC ABC ABC');
// }
// aaaaaaaaaaaaaaaaaaaaaaa


const getForm = (req, res) => {
    res.render('form.ejs');
}

const postNewUser = async (req, res) => {
    // console.log(">>>check: ", req.body);
    let { email, name, city } = req.body;
    await postCreateUser(email, name, city);

    res.redirect('/');
}


module.exports = { getHomePage, getForm, postNewUser }