"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const isAdmin_1 = require("../middleware/isAdmin");
const pet_1 = require("../controllers/pet");
const express_validator_1 = require("express-validator");
const s3_upload_1 = require("../services/s3-upload");
const router = express_1.Router();
exports.router = router;
router.get('/pets', pet_1.getPets);
router.get('/pet/:petId', pet_1.getPet);
router.post('/pet', isAdmin_1.isAdmin, [
    express_validator_1.body('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Debe incluir el nombre de la mascota'),
    express_validator_1.body('location')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Debe incluir la ubicacion de la mascota'),
    express_validator_1.body('breed')
        .trim()
        .not()
        .isEmpty()
        .toLowerCase()
        .withMessage('Debe incluir la raza de la mascota'),
    express_validator_1.body('adopted')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Debe decir si la mascota es adoptada o no'),
    express_validator_1.body('description')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Debe incluir la descripccion de la mascota'),
], pet_1.createPet);
router.put('/pet/:petId', isAdmin_1.isAdmin, [
    express_validator_1.body('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Debe incluir el nombre de la mascota'),
    express_validator_1.body('location')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Debe incluir la ubicacion de la mascota'),
    express_validator_1.body('breed')
        .trim()
        .not()
        .isEmpty()
        .toLowerCase()
        .withMessage('Debe incluir la raza de la mascota'),
    express_validator_1.body('adopted')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Debe decir si la mascota es adoptada o no'),
    express_validator_1.body('description')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Debe incluir la descripccion de la mascota'),
], pet_1.updatePet);
router.delete('/pet/:petId', isAdmin_1.isAdmin, pet_1.deletePet);
router.post('/pet/upload/:petId', isAdmin_1.isAdmin, s3_upload_1.upload.array('images[]', 3), pet_1.uploadPetPictures);
router.post('/send', [
    express_validator_1.body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Debe incluir un email valido'),
    express_validator_1.body('message')
        .not()
        .isEmpty()
        .isLength({ max: 5000 })
        .withMessage('Debe incluir un mensaje y que esta tenga maximo 5000 caracteres'),
    express_validator_1.body('userName').not().isEmpty().withMessage('Debe incluir su nombre'),
    express_validator_1.body('petId').not().isEmpty(),
], pet_1.sendEmail);
//# sourceMappingURL=pets.js.map