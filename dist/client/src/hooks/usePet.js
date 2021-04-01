"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePetData = void 0;
const react_redux_1 = require("react-redux");
function usePetData(petId) {
    const petData = react_redux_1.useSelector(({ pets }) => {
        return pets === null || pets === void 0 ? void 0 : pets.petsData.find((pet) => pet.id === petId);
    });
    return petData;
}
exports.usePetData = usePetData;
