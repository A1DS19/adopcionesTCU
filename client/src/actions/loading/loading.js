"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearError = exports.asyncActionError = exports.asyncActionFinish = exports.asyncActionStart = void 0;
const types_1 = require("../types");
const asyncActionStart = () => {
    return {
        type: types_1.types.ASYNC_ACTION_START,
    };
};
exports.asyncActionStart = asyncActionStart;
const asyncActionFinish = () => {
    return {
        type: types_1.types.ASYNC_ACTION_FINISH,
    };
};
exports.asyncActionFinish = asyncActionFinish;
const asyncActionError = (error) => {
    console.log(error);
    return {
        type: types_1.types.ASYNC_ACTION_ERROR,
        payload: error,
    };
};
exports.asyncActionError = asyncActionError;
const clearError = () => {
    return {
        type: types_1.types.CLEAR_ERROR,
    };
};
exports.clearError = clearError;
//# sourceMappingURL=loading.js.map