const connection = require('../config/database');
const {
    getAllUsers, postCreateUser, getUserById, updateUserById, deleteUser
} = require('../services/CRUD.services');

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

const getEditForm = async (req, res) => {
    let id = req.params.id;

    let [user] = await getUserById(id);

    // console.log(user);

    res.render('edit.ejs', { user: user });
}

const updateUser = async (req, res) => {
    let { id, email, name, city } = req.body;

    try {
        await updateUserById(id, email, name, city);
    } catch (error) {
        console.log(error);
    }

    res.redirect('/');
}

const getDelForm = async (req, res) => {
    let id = req.params.id;
    let [user] = await getUserById(id);

    res.render('delete.ejs', { user: user });
}

const handleDel = async (req, res) => {
    // console.log(req.body);
    let id = req.body.id;
    try {
        await deleteUser(id);
        res.send('delete ok');
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }

}

module.exports = {
    getHomePage, getForm, postNewUser, getEditForm, updateUser, getDelForm, handleDel
}