const express = require('express');
const router = express.Router();
const { getHomePage, getUserEdit, getFilePage, updateUser, createNewUser, handleDelete } = require('../controller/home.controller');

router.get('/', getHomePage);
router.get('/file', getFilePage);
router.get('/update-user/:id', getUserEdit);
router.put('/update-user', updateUser);
router.post('/create-user', createNewUser);
router.delete('/delete-user/:id', handleDelete);

module.exports = router;