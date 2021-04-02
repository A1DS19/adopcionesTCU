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
exports.updateUser = exports.deleteUser = exports.getUser = exports.createUser = exports.getUsers = void 0;
const user_1 = require("../models/user");
const express_validator_1 = require("express-validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const s3_delete_1 = require("../services/s3-delete");
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.User.find();
        if (!users) {
            return res.status(404).json({ msg: 'No hay usuarios' });
        }
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.getUsers = getUsers;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    const { email, password, name, lastName, isAdmin, displayName } = req.body;
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
            name,
            lastName,
            isAdmin,
        });
        const newUser = yield user.save();
        res.status(201).json({
            msg: 'Usuario creado',
            _id: newUser._id,
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
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const user = yield user_1.User.findById(userId);
        if (!user) {
            res.status(404).json({ msg: 'Usuario no existe' });
        }
        res.status(200).json({
            msg: 'Usuario encontrado',
            _id: user === null || user === void 0 ? void 0 : user._id,
            id: user === null || user === void 0 ? void 0 : user.id,
            name: user === null || user === void 0 ? void 0 : user.name,
            email: user === null || user === void 0 ? void 0 : user.email,
            lastName: user === null || user === void 0 ? void 0 : user.lastName,
            isAdmin: user === null || user === void 0 ? void 0 : user.isAdmin,
            displayName: user === null || user === void 0 ? void 0 : user.displayName,
            password: user === null || user === void 0 ? void 0 : user.password,
            createdAt: user === null || user === void 0 ? void 0 : user.createdAt,
            photoURL: user === null || user === void 0 ? void 0 : user.photoURL,
        });
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
exports.getUser = getUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const user = yield user_1.User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'Usuario no existe' });
        }
        if (user.photoURL) {
            const Key = user.photoURL.split('https://s3.amazonaws.com/adoptme.cr/')[1];
            yield s3_delete_1.s3delete({ Bucket: process.env.AWS_S3_BUCKET, Key });
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
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    const { userId } = req.params;
    const { name, lastName, displayName, email, isAdmin } = req.body;
    try {
        const user = yield user_1.User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'Usuario no existe' });
        }
        user.displayName = displayName;
        user.name = name;
        user.lastName = lastName;
        user.email = email;
        user.isAdmin = isAdmin;
        const updatedUser = yield user.save();
        console.log(updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.displayName);
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
exports.updateUser = updateUser;
//# sourceMappingURL=admin.js.map