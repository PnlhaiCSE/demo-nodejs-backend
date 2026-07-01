const conn = require('../config/connectDB');
const { getAllUsers, getUserById, updateUserById, addUser, deleteById } = require('../services/CRUD.services');

const getHomePage = async (req, res) => {
    try {
        const results = await getAllUsers();
        // console.log(results);
        res.render('home.ejs', { users: results });
    } catch (err) {
        console.log(err);
    }
}

const getFilePage = (req, res) => {
    res.render('file.ejs');
}

const getUserEdit = async (req, res) => {
    try {
        let id = req.params.id;
        const results = await getUserById(id);
        res.json(results[0]);
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    try {
        await updateUserById(id, email, name, city);
    } catch (error) {
        console.log(error);
    }

    // res.json({ message: 'successful' });
    res.status(204).end();
}

const createNewUser = async (req, res) => {
    // console.log(req.body);

    let { email, name, city } = req.body;
    // console.log(email, name, city);
    try {
        await addUser(email, name, city);
    } catch (error) {
        console.log(error);
    }

    res.status(200).redirect('/');
}

const handleDelete = async (req, res) => {
    let id = req.params.id;
    try {
        await deleteById(id);
    } catch (error) {
        console.log(error);
    }
    res.status(200).end();
}

module.exports = { getHomePage, getUserEdit, getFilePage, updateUser, createNewUser, handleDelete }