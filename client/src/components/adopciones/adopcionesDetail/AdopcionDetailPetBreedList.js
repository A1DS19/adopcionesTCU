"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionDetailPetBreedList = void 0;
const react_1 = __importStar(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const AdopcionDetailListItem_1 = require("./AdopcionDetailListItem");
const AdopcionDetailPetBreedList = ({ selectedPet, petsData, }) => {
    //Encuentra los animales cuya raza sea igual a
    //del animal seleccionado
    const currentBreedPets = petsData.filter((pet) => pet.breed === (selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.breed) && pet._id !== selectedPet.id);
    const renderCurrentBreedPets = currentBreedPets
        .map((pet) => (react_1.default.createElement(AdopcionDetailListItem_1.AdopcionDetailListItem, { key: pet._id, selectedBreedPet: pet })))
        .slice(0, 3);
    return (react_1.default.createElement(react_1.Fragment, null, currentBreedPets.length !== 0 && (react_1.default.createElement(semantic_ui_react_1.Segment, null,
        react_1.default.createElement(semantic_ui_react_1.Header, { textAlign: 'center', as: 'h1', content: `Mas rescates de raza ${selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.breed}` }),
        react_1.default.createElement(semantic_ui_react_1.Card.Group, { itemsPerRow: 3, doubling: true, stackable: true }, renderCurrentBreedPets)))));
};
exports.AdopcionDetailPetBreedList = AdopcionDetailPetBreedList;
//# sourceMappingURL=AdopcionDetailPetBreedList.js.map