"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const admin_1 = require("../controllers/admin");
const express_validator_1 = require("express-validator");
const isAdmin_1 = require("../middleware/isAdmin");
const router = express_1.Router();
exports.router = router;
router.get('/users', isAdmin_1.isAdmin, admin_1.getUsers);
router.get('/user/:userId', isAdmin_1.isAdmin, admin_1.getUser);
router.post('/user', isAdmin_1.isAdmin, [
    express_validator_1.body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Debe agregar un email valido'),
    express_validator_1.body('password')
        .trim()
        .isLength({ min: 6 })
        .withMessage('La contrasena debe tener al menos 6 caracteres'),
    express_validator_1.body('name').trim().not().isEmpty().withMessage('El nombre es requerido'),
    express_validator_1.body('lastName').trim().not().isEmpty().withMessage('El apellido es requerido'),
    express_validator_1.body('isAdmin')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Determinar si el usuario es administrador o no es requerido'),
    express_validator_1.body('displayName')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Debe agregar su nombre de usuario'),
], admin_1.createUser);
router.put('/user/:userId', isAdmin_1.isAdmin, [
    express_validator_1.body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Debe agregar un email valido'),
    express_validator_1.body('name').trim().not().isEmpty().withMessage('El nombre es requerido'),
    express_validator_1.body('lastName').trim().not().isEmpty().withMessage('El apellido es requerido'),
    express_validator_1.body('isAdmin')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Determinar si el usuario es administrador o no es requerido'),
    express_validator_1.body('displayName')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Debe agregar su nombre de usuario'),
], admin_1.updateUser);
router.delete('/user/:userId', isAdmin_1.isAdmin, admin_1.deleteUser);
