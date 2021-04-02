"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.uploadPetPictures = exports.getPets = exports.deletePet = exports.getPet = exports.updatePet = exports.createPet = void 0;
const express_validator_1 = require("express-validator");
const pet_1 = require("../models/pet");
const nodemailer_1 = __importDefault(require("nodemailer"));
const s3_delete_1 = require("../services/s3-delete");
const createPet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    const { name, location, breed, adopted, description } = req.body;
    try {
        const pet = new pet_1.Pet({
            name,
            location,
            breed,
            adopted,
            description,
        });
        const newPet = yield pet.save();
        res.status(201).json({
            msg: 'Mascota creada',
            id: newPet._id,
            name: newPet.name,
            location: newPet.location,
            breed: newPet.breed,
            adopted: newPet.adopted,
            description: newPet.description,
            photosUrl: newPet.photosUrl,
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.createPet = createPet;
const updatePet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    const { petId } = req.params;
    const { name, location, breed, adopted, description } = req.body;
    try {
        const pet = yield pet_1.Pet.findById(petId);
        if (!pet) {
            return res.status(404).json({ msg: 'Mascota no existe' });
        }
        pet.name = name;
        pet.location = location;
        pet.breed = breed;
        pet.adopted = adopted;
        pet.description = description;
        const updatedPet = yield pet.save();
        res.status(201).json({
            msg: 'Mascota actualizada',
            id: updatedPet._id,
            name: updatedPet.name,
            location: updatedPet.location,
            breed: updatedPet.breed,
            adopted: updatedPet.adopted,
            description: updatedPet.description,
            photosUrl: updatedPet.photosUrl,
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.updatePet = updatePet;
const getPet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { petId } = req.params;
    try {
        const pet = yield pet_1.Pet.findById(petId);
        if (!pet) {
            res.status(404).json({ msg: 'Mascota no encontrada' });
        }
        res.status(200).json({
            msg: 'Mascota encontrada',
            id: pet === null || pet === void 0 ? void 0 : pet._id,
            name: pet === null || pet === void 0 ? void 0 : pet.name,
            adopted: pet === null || pet === void 0 ? void 0 : pet.adopted,
            photosUrl: pet === null || pet === void 0 ? void 0 : pet.photosUrl,
            location: pet === null || pet === void 0 ? void 0 : pet.location,
            breed: pet === null || pet === void 0 ? void 0 : pet.breed,
            description: pet === null || pet === void 0 ? void 0 : pet.description,
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.getPet = getPet;
const deletePet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { petId } = req.params;
    try {
        const pet = yield pet_1.Pet.findById(petId);
        if (!pet) {
            return res.status(404).json({ msg: 'Mascota no existe' });
        }
        if (pet.photosUrl) {
            pet.photosUrl.map((img) => __awaiter(void 0, void 0, void 0, function* () {
                let Key = img.split('https://s3.amazonaws.com/adoptme.cr/')[1];
                yield s3_delete_1.s3delete({ Bucket: process.env.AWS_S3_BUCKET, Key: Key });
            }));
        }
        yield pet_1.Pet.findByIdAndDelete(pet._id);
        res.status(200).json({
            msg: 'Mascota eliminada',
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.deletePet = deletePet;
const getPets = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const page = req.query.page || '0';
    const limit = 10;
    try {
        const totalPets = yield pet_1.Pet.countDocuments();
        const pets = yield pet_1.Pet.find()
            .limit(limit * 1)
            .skip(+page * limit);
        if (!pets) {
            return res.status(404).json({ msg: 'No hay usuarios' });
        }
        res.status(200).json({ pets, totalPages: Math.ceil(totalPets / limit) });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.getPets = getPets;
const uploadPetPictures = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { petId } = req.params;
    const imagesKeys = Object.keys(req.files);
    let images = [];
    res.send({ msg: 'Images agregadas', images });
    if (!images) {
        return res.status(404).json({ msg: 'Las imagenes no pudieron ser guardadas' });
    }
    imagesKeys.forEach((key) => {
        images.push(req.files[key]);
    });
    try {
        const pet = yield pet_1.Pet.findById(petId);
        if (!pet) {
            return res.status(404).json({ msg: 'La mascota no existe' });
        }
        images.forEach((img) => {
            pet.photosUrl.push(img.location);
        });
        const updatedPet = yield pet.save();
        res.status(200).json({
            msg: 'Fotos de mascota actualizada',
            id: updatedPet._id,
            name: updatedPet === null || updatedPet === void 0 ? void 0 : updatedPet.name,
            adopted: updatedPet === null || updatedPet === void 0 ? void 0 : updatedPet.adopted,
            photosUrl: updatedPet === null || updatedPet === void 0 ? void 0 : updatedPet.photosUrl,
            location: updatedPet === null || updatedPet === void 0 ? void 0 : updatedPet.location,
            breed: updatedPet === null || updatedPet === void 0 ? void 0 : updatedPet.breed,
            description: updatedPet === null || updatedPet === void 0 ? void 0 : updatedPet.description,
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.uploadPetPictures = uploadPetPictures;
const sendEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    const { userName, email, message, petId } = req.body;
    try {
        const pet = yield pet_1.Pet.findById(petId);
        const output = `
    <h3>Nueva consulta acerca de ${pet === null || pet === void 0 ? void 0 : pet.name}</h3>
    <p>De: ${email}, ${userName}</p>
    <p>Mensaje:</p>
    <p>${message}</p>
    `;
        const transporter = nodemailer_1.default.createTransport({
            host: process.env.AWS_SMTP_HOST,
            port: process.env.AWS_SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.AWS_SMTP_USERNAME,
                pass: process.env.AWS_SMTP_PASSWORD,
            },
        });
        const info = yield transporter.sendMail({
            from: process.env.EMAIL_RECIPIENT,
            to: process.env.EMAIL_RECIPIENT,
            subject: `Nueva consulta acerca de ${pet === null || pet === void 0 ? void 0 : pet.name}`,
            html: output,
        });
        console.log(`email enviado ${info.messageId}`);
        res.status(201).json({ msg: 'Consulta enviada' });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=pet.js.map