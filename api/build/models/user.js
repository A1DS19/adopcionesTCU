"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    displayName: {
        type: String,
        required: true,
    },
    name: { type: String },
    lastName: { type: String },
    isAdmin: { type: String, default: 'false' },
    photoURL: { type: String },
}, { timestamps: true });
exports.User = mongoose_1.model('User', UserSchema);
