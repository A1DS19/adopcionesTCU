"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authReducer = void 0;
const types_1 = require("../actions/types");
const initialState = {
    authenticated: false,
    currentUser: null,
    userId: null,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types_1.types.SIGNED_IN:
            return Object.assign(Object.assign({}, state), { authenticated: true, currentUser: action.payload });
        case types_1.types.FETCH_CURRENT_USER:
            return Object.assign(Object.assign({}, state), { currentUser: action.payload });
        case types_1.types.UPDATE_CURRENT_USER:
            return Object.assign(Object.assign({}, state), { currentUser: action.payload });
        case types_1.types.SIGNED_OUT:
            return Object.assign(Object.assign({}, state), { authenticated: false, currentUser: null });
        default:
            return state;
    }
};
exports.authReducer = authReducer;
//# sourceMappingURL=auth.js.map