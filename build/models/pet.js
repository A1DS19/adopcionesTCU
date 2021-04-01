"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const mongoose_1 = require("mongoose");
const PetSchema = new mongoose_1.Schema({
    name: { type: String },
    location: { type: String },
    breed: { type: String },
    adopted: { type: String, default: 'false' },
    photosUrl: [{ type: String }],
    description: { type: String },
}, { timestamps: true });
exports.Pet = mongoose_1.model('Pet', PetSchema);
