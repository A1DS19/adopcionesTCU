"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeModal = exports.openModal = void 0;
const types_1 = require("./types");
const openModal = (payload) => {
    return {
        type: types_1.types.OPEN_MODAL,
        payload,
    };
};
exports.openModal = openModal;
const closeModal = () => {
    return {
        type: types_1.types.CLOSE_MODAL,
    };
};
exports.closeModal = closeModal;
