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
exports.AdopcionList = void 0;
const react_1 = __importStar(require("react"));
const AdopcionlistItem_1 = require("./AdopcionlistItem");
const AdopcionLoader_1 = require("./AdopcionLoader");
const semantic_ui_react_1 = require("semantic-ui-react");
const AdopcionList = ({ petsData, loading, }) => {
    if (loading) {
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(AdopcionLoader_1.AdopcionLoader, null),
            react_1.default.createElement(AdopcionLoader_1.AdopcionLoader, null),
            react_1.default.createElement(AdopcionLoader_1.AdopcionLoader, null)));
    }
    const renderPets = petsData === null || petsData === void 0 ? void 0 : petsData.map((pet) => {
        return react_1.default.createElement(AdopcionlistItem_1.AdopcionListItem, { key: pet._id, pet: pet });
    });
    const renderLoader = () => {
        return (react_1.default.createElement(semantic_ui_react_1.Message, { icon: true },
            react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'circle notched', loading: loading }),
            react_1.default.createElement(semantic_ui_react_1.Message.Content, null,
                react_1.default.createElement(semantic_ui_react_1.Message.Header, null, "Espere un segundo..."),
                "Estamos cargando mas contenido")));
    };
    const renderEndMessage = () => {
        return react_1.default.createElement(semantic_ui_react_1.Message, { icon: 'warning', header: 'Ya no hay mas contenido' });
    };
    return (react_1.default.createElement(react_1.Fragment, null, petsData.length !== 0 ? (react_1.default.createElement(semantic_ui_react_1.Card.Group, { itemsPerRow: 2, doubling: true, stackable: true }, renderPets)) : (react_1.default.createElement(semantic_ui_react_1.Message, { icon: 'warning', header: 'Ya no hay mas contenido' }))));
};
exports.AdopcionList = AdopcionList;
//# sourceMappingURL=AdopcionList.js.map