"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersReducer = void 0;
const types_1 = require("../actions/types");
const initialState = {
    usersData: [],
    selectedUser: undefined,
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types_1.types.FETCH_USERS_DATA:
            return Object.assign(Object.assign({}, state), { usersData: action.payload });
        case types_1.types.FETCH_SELECTED_USER:
            return Object.assign(Object.assign({}, state), { selectedUser: action.payload });
        case types_1.types.CREATE_USER:
            return Object.assign(Object.assign({}, state), { usersData: [...state.usersData, action.payload] });
        case types_1.types.UPDATE_USER:
            return Object.assign(Object.assign({}, state), { usersData: [
                    ...state.usersData.filter((user) => user._id !== action.payload.id),
                    action.payload,
                ] });
        case types_1.types.DELETE_USER:
            return Object.assign(Object.assign({}, state), { usersData: state.usersData.filter((user) => user._id !== action.payload) });
        case types_1.types.CLEAR_SELECTED_USER:
            return Object.assign(Object.assign({}, state), { selectedUser: action.payload });
        default:
            return state;
    }
};
exports.usersReducer = usersReducer;
//# sourceMappingURL=users.js.map