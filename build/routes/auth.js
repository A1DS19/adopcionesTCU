"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const s3_upload_1 = require("../services/s3-upload");
const auth_1 = require("../controllers/auth");
const isAuth_1 = require("../middleware/isAuth");
const router = express_1.Router();
exports.router = router;
router.get('/user/:userId', isAuth_1.isAuth, auth_1.getCurrentUser);
router.post('/login', [
    express_validator_1.body('email')
        .trim()
        .not()
        .isEmpty()
        .normalizeEmail()
        .withMessage('Debe su email valido'),
    express_validator_1.body('password').trim().not().isEmpty().withMessage('Debe agregar una contrasena'),
], auth_1.loginUser);
router.post('/register', [
    express_validator_1.body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Debe agregar un email valido'),
    express_validator_1.body('password')
        .trim()
        .isLength({ min: 6 })
        .withMessage('La contrasena debe tener al menos 6 caracteres'),
    express_validator_1.body('displayName')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Debe agregar su nombre de usuario'),
], auth_1.createUser);
router.put('/user/:userId', isAuth_1.isAuth, [
    express_validator_1.body('displayName')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Debe agregar su nombre de usuario'),
    express_validator_1.body('name').trim().not().isEmpty().withMessage('Debe agregar su nombre'),
    express_validator_1.body('lastName').trim().not().isEmpty().withMessage('Debe agregar su apellido'),
], auth_1.updateUserData);
router.put('/user-password/:userId', isAuth_1.isAuth, [
    express_validator_1.body('oldPassword')
        .trim()
        .isLength({ min: 6 })
        .withMessage('La contrasena debe tener al menos 6 caracteres'),
    express_validator_1.body('newPassword')
        .trim()
        .isLength({ min: 6 })
        .withMessage('La contrasena debe tener al menos 6 caracteres'),
], auth_1.updateUserPassword);
router.delete('/user/:userId', isAuth_1.isAuth, auth_1.deleteUser);
router.post('/user/upload/:userId', isAuth_1.isAuth, s3_upload_1.upload.single('image'), auth_1.uploadUserPFP);
//# sourceMappingURL=auth.js.map