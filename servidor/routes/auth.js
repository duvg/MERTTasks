// Rutas para autenticar usuarios
var express = require('express');
var router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

// Autenticar usuario
// api/auth
router.post('/', 
    [
        check('email', 'Agreaga un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({min: 6})
    ],
    authController.authUser
);

module.exports = router;