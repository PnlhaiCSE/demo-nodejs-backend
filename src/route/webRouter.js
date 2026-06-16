const express = require('express');
const { getHomePage, getLongHai, getABC, getForm, postNewUser } = require('../controller/homeController');
const router = express.Router();


// khai báo route
router.get('/', getHomePage);

router.get('/longhai', getLongHai);

router.get('/abc', getABC);

router.get('/form', getForm);

router.post('/create-user', postNewUser);

module.exports = router;