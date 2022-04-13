const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userIconsUpload = require('../middlewares/userMulterMiddleware');
const validacionesLogin = require('../middlewares/validatorLoginMiddleware');
const validacionesRegister = require('../middlewares/validatorRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validacionesEditUser = require('../middlewares/validationEditUserMiddleware');

router.get('/login', guestMiddleware, userController.login)

router.post('/login', validacionesLogin, userController.loginProcess)

router.get('/register', guestMiddleware, userController.register)
router.post('/register', userIconsUpload.single('avatar'), validacionesRegister, userController.registerProcess);

router.get('/userProfile', authMiddleware, userController.profile);

router.get('/editUser/:id', authMiddleware, userController.editUser);
router.put('/editUser/:id', userIconsUpload.single('editUserfoto'),validacionesEditUser , userController.editUserProcess);

router.get('/logout', userController.logout);

module.exports = router