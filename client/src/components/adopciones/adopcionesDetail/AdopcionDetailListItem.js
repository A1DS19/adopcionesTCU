"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionDetailListItem = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const react_router_dom_1 = require("react-router-dom");
const AdopcionDetailListItem = ({ selectedBreedPet, }) => {
    var _a;
    return (react_1.default.createElement(semantic_ui_react_1.Card, { as: react_router_dom_1.Link, to: `/adoption/${selectedBreedPet === null || selectedBreedPet === void 0 ? void 0 : selectedBreedPet._id}` },
        react_1.default.createElement(semantic_ui_react_1.Image, { fluid: true, src: ((_a = selectedBreedPet.photosUrl) === null || _a === void 0 ? void 0 : _a.length) > 0
                ? selectedBreedPet === null || selectedBreedPet === void 0 ? void 0 : selectedBreedPet.photosUrl[0]
                : '/assets/pet-house.png' }),
        react_1.default.createElement(semantic_ui_react_1.Card.Content, { textAlign: 'center' },
            react_1.default.createElement(semantic_ui_react_1.Card.Header, null,
                ' ',
                react_1.default.createElement("p", { style: { color: 'orange' } }, selectedBreedPet === null || selectedBreedPet === void 0 ? void 0 : selectedBreedPet.name),
                ' '),
            react_1.default.createElement(semantic_ui_react_1.Card.Meta, null,
                react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'point' }),
                " ", selectedBreedPet === null || selectedBreedPet === void 0 ? void 0 :
                selectedBreedPet.location),
            react_1.default.createElement(semantic_ui_react_1.Card.Description, null, selectedBreedPet === null || selectedBreedPet === void 0 ? void 0 : selectedBreedPet.description))));
};
exports.AdopcionDetailListItem = AdopcionDetailListItem;
//# sourceMappingURL=AdopcionDetailListItem.js.map