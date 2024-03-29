var express = require('express');
var router = express.Router();
var LinkController = require('../controllers/LinkController.js');
var helper = require('./helperFunctions');

/*
* Links CRUD
*/
router.get('/dashboard', helper.isLoggedIn, LinkController.myBoard);
router.post('/dashboard', helper.isLoggedIn, LinkController.create);
router.post('/remove', helper.isLoggedIn, LinkController.remove);

/*
* Main view
*/
router.get('/', LinkController.show);

module.exports = router;
