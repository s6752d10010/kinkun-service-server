const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');

router.post('/', userController.upload, userController.createUser);

router.get('/:userEmail/:userPassword', userController.checkLogin);

router.post('/:userId', userController.upload, userController.editUser);



module.exports = router;