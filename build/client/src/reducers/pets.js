"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petsReducer = void 0;
const types_1 = require("../actions/types");
const initialState = {
    petsData: [],
    selectedPet: undefined,
    page: 0,
    totalPages: 0,
};
const petsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types_1.types.UPDATE_PAGE_NUMBER:
            return Object.assign(Object.assign({}, state), { page: action.payload });
        case types_1.types.FETCH_PETS_DATA:
            return Object.assign(Object.assign({}, state), { petsData: action.payload.pets, totalPages: action.payload.totalPages });
        case types_1.types.FETCH_SELECTED_PET:
            return Object.assign(Object.assign({}, state), { selectedPet: action.payload });
        case types_1.types.CREATE_PET:
            return Object.assign(Object.assign({}, state), { petsData: [...state.petsData, action.payload] });
        case types_1.types.UPDATE_PET:
            return Object.assign(Object.assign({}, state), { petsData: [
                    ...state.petsData.filter((pet) => pet._id !== action.payload._id),
                    action.payload,
                ] });
        case types_1.types.DELETE_PET:
            return Object.assign(Object.assign({}, state), { petsData: state.petsData.filter((pet) => pet._id !== action.payload) });
        case types_1.types.CLEAR_SELECTED_PET:
            return Object.assign(Object.assign({}, state), { selectedPet: action.payload });
        default:
            return state;
    }
};
exports.petsReducer = petsReducer;
