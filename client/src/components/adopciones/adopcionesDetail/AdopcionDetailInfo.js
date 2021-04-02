"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionDetailInfo = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const AdopcionDetailInfo = ({ selectedPet }) => {
    return (react_1.default.createElement(semantic_ui_react_1.Segment, null,
        react_1.default.createElement(semantic_ui_react_1.Item.Group, null,
            react_1.default.createElement(semantic_ui_react_1.Item.Content, null,
                react_1.default.createElement(semantic_ui_react_1.Item.Header, { as: 'h1', content: selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.name }),
                react_1.default.createElement(semantic_ui_react_1.Divider, null),
                react_1.default.createElement(semantic_ui_react_1.Item.Meta, null,
                    react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'paw' }),
                    " ", selectedPet === null || selectedPet === void 0 ? void 0 :
                    selectedPet.breed,
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'point' }), selectedPet === null || selectedPet === void 0 ? void 0 :
                    selectedPet.location),
                react_1.default.createElement(semantic_ui_react_1.Divider, null),
                react_1.default.createElement(semantic_ui_react_1.Item.Header, { as: 'h3', content: 'Acerca' }),
                react_1.default.createElement(semantic_ui_react_1.Item.Header, { as: 'h5', content: 'Caracteristicas' }),
                react_1.default.createElement(semantic_ui_react_1.Item.Description, null, selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.description)))));
};
exports.AdopcionDetailInfo = AdopcionDetailInfo;
//# sourceMappingURL=AdopcionDetailInfo.js.map