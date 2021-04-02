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
exports.uploadUserPFP = exports.updateUserPassword = exports.deleteUser = exports.updateUserData = exports.getCurrentUser = exports.loginUser = exports.createUser = void 0;
const express_validator_1 = require("express-validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    const { email, displayName, password } = req.body;
    try {
        const existingUser = yield user_1.User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ msg: 'El email ya existe' });
        }
        const existingUser2 = yield user_1.User.findOne({ displayName });
        if (existingUser2) {
            return res.status(401).json({ msg: 'El nombre de usuario ya existe' });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 12);
        const user = new user_1.User({
            email,
            displayName,
            password: hashedPassword,
        });
        const newUser = yield user.save();
        const token = jsonwebtoken_1.default.sign({
            userId: newUser.id,
            isAdmin: newUser.isAdmin,
        }, process.env.JWT_SECRET_KEY);
        res.status(201).json({
            msg: 'Usuario creado',
            token,
            id: newUser === null || newUser === void 0 ? void 0 : newUser.id,
            name: newUser === null || newUser === void 0 ? void 0 : newUser.name,
            email: newUser === null || newUser === void 0 ? void 0 : newUser.email,
            lastName: newUser === null || newUser === void 0 ? void 0 : newUser.lastName,
            isAdmin: newUser === null || newUser === void 0 ? void 0 : newUser.isAdmin,
            displayName: newUser === null || newUser === void 0 ? void 0 : newUser.displayName,
            createdAt: newUser === null || newUser === void 0 ? void 0 : newUser.createdAt,
            photoURL: newUser === null || newUser === void 0 ? void 0 : newUser.photoURL,
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.createUser = createUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    const { email, password } = req.body;
    try {
        const existingUser = yield user_1.User.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({ msg: 'Datos invalidos' });
        }
        const isEqual = yield bcryptjs_1.default.compare(password, existingUser.password);
        if (!isEqual) {
            return res.status(401).json({ msg: 'Datos invalidos' });
        }
        const token = jsonwebtoken_1.default.sign({
            userId: existingUser.id,
            isAdmin: existingUser.isAdmin,
        }, process.env.JWT_SECRET_KEY);
        res.status(201).json({
            msg: 'Usuario loggeado',
            token,
            id: existingUser === null || existingUser === void 0 ? void 0 : existingUser.id,
            name: existingUser === null || existingUser === void 0 ? void 0 : existingUser.name,
            email: existingUser === null || existingUser === void 0 ? void 0 : existingUser.email,
            lastName: existingUser === null || existingUser === void 0 ? void 0 : existingUser.lastName,
            isAdmin: existingUser === null || existingUser === void 0 ? void 0 : existingUser.isAdmin,
            displayName: existingUser === null || existingUser === void 0 ? void 0 : existingUser.displayName,
            createdAt: existingUser === null || existingUser === void 0 ? void 0 : existingUser.createdAt,
            photoURL: existingUser === null || existingUser === void 0 ? void 0 : existingUser.photoURL,
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.loginUser = loginUser;
const getCurrentUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const user = yield user_1.User.findById(userId);
        if (!user) {
            res.status(404).json({ msg: 'Usuario no existe' });
        }
        res.status(200).json({
            msg: 'Usuario encontrado',
            id: user === null || user === void 0 ? void 0 : user.id,
            name: user === null || user === void 0 ? void 0 : user.name,
            email: user === null || user === void 0 ? void 0 : user.email,
            lastName: user === null || user === void 0 ? void 0 : user.lastName,
            isAdmin: user === null || user === void 0 ? void 0 : user.isAdmin,
            displayName: user === null || user === void 0 ? void 0 : user.displayName,
            createdAt: user === null || user === void 0 ? void 0 : user.createdAt,
            photoURL: user === null || user === void 0 ? void 0 : user.photoURL,
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.getCurrentUser = getCurrentUser;
const updateUserData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    const { userId } = req.params;
    const { name, lastName, displayName } = req.body;
    try {
        const user = yield user_1.User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'Usuario no existe' });
        }
        user.displayName = displayName;
        user.name = name;
        user.lastName = lastName;
        const updatedUser = yield user.save();
        res.status(201).json({
            msg: 'Usuario actualizado',
            id: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.id,
            name: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.name,
            email: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.email,
            lastName: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.lastName,
            isAdmin: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.isAdmin,
            displayName: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.displayName,
            createdAt: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.createdAt,
            photoURL: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.photoURL,
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.updateUserData = updateUserData;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const user = yield user_1.User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'Usuario no existe' });
        }
        yield user_1.User.findByIdAndDelete(user.id);
        res.status(200).json({
            msg: 'Usuario eliminado',
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.deleteUser = deleteUser;
const updateUserPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { oldPassword, newPassword } = req.body;
    console.log(oldPassword, newPassword);
    try {
        const existingUser = yield user_1.User.findById(userId);
        if (!existingUser) {
            return res.status(404).json({ msg: 'Usuario no existe' });
        }
        const isEqual = yield bcryptjs_1.default.compare(oldPassword, existingUser.password);
        if (!isEqual) {
            return res.status(402).json({ msg: 'Datos invalidos' });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(newPassword, 12);
        existingUser.password = hashedPassword;
        yield existingUser.save();
        res.status(201).json({
            msg: 'Contrasena actualizada',
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.updateUserPassword = updateUserPassword;
const uploadUserPFP = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const image = req.file.location;
    if (!image) {
        return res.status(404).json({ msg: 'La imagen no pudo ser guardada' });
    }
    try {
        const user = yield user_1.User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'El usuario no existe' });
        }
        user.photoURL = image;
        const updatedUser = yield user.save();
        res.status(200).json({
            msg: 'Foto de perfil actualizada',
            id: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.id,
            name: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.name,
            email: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.email,
            lastName: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.lastName,
            isAdmin: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.isAdmin,
            displayName: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.displayName,
            createdAt: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.createdAt,
            photoURL: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.photoURL,
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.uploadUserPFP = uploadUserPFP;
//# sourceMappingURL=auth.js.map