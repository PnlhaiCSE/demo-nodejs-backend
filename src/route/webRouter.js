const express = require('express');
const { getHomePage, getForm, postNewUser, getEditForm, updateUser
} = require('../controller/homeController');
const router = express.Router();


// khai báo route

// router.get('/longhai', getLongHai);
// router.get('/abc', getABC);
router.get('/', getHomePage);
router.get('/form', getForm);
router.get('/update-user/:id', getEditForm);

router.post('/create-user', postNewUser);
router.post('/update-user', updateUser);

module.exports = router;