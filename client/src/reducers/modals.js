"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modalsReducer = void 0;
const types_1 = require("../actions/types");
const modalsReducer = (state = null, action) => {
    switch (action.type) {
        case types_1.types.OPEN_MODAL:
            return action.payload;
        case types_1.types.CLOSE_MODAL:
            return null;
        default:
            return state;
    }
};
exports.modalsReducer = modalsReducer;
//# sourceMappingURL=modals.js.map