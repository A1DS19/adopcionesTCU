"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadingReducer = void 0;
const types_1 = require("../actions/types");
const initialState = {
    loading: false,
    error: null,
    initialized: false,
};
const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types_1.types.ASYNC_ACTION_START:
            return Object.assign(Object.assign({}, state), { loading: true });
        case types_1.types.ASYNC_ACTION_ERROR:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload });
        case types_1.types.ASYNC_ACTION_FINISH:
            return Object.assign(Object.assign({}, state), { loading: false });
        case types_1.types.APP_LOADED:
            return Object.assign(Object.assign({}, state), { initialized: true });
        case types_1.types.CLEAR_ERROR:
            return Object.assign(Object.assign({}, state), { error: null });
        default:
            return state;
    }
};
exports.loadingReducer = loadingReducer;
//# sourceMappingURL=loading.js.map