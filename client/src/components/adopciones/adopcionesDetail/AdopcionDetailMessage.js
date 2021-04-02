"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionDetailMessage = void 0;
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const semantic_ui_react_1 = require("semantic-ui-react");
const ContactForm_1 = require("./ContactForm");
const AdopcionDetailMessage = ({ selectedPet }) => {
    const { currentUser } = react_redux_1.useSelector((state) => state.auth);
    return (react_1.default.createElement(semantic_ui_react_1.Grid, { style: { marginTop: '10px' }, centered: currentUser ? false : true },
        currentUser && (react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 7 },
            react_1.default.createElement("h2", { style: { margin: 0 } }, "Departe de:"),
            react_1.default.createElement("h3", { style: { margin: 0 } },
                ' ',
                react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'mail' }),
                " ", currentUser === null || currentUser === void 0 ? void 0 :
                currentUser.email),
            react_1.default.createElement("p", { style: { marginTop: '5px' } },
                react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'user' }),
                " ", currentUser === null || currentUser === void 0 ? void 0 :
                currentUser.name,
                " ", currentUser === null || currentUser === void 0 ? void 0 :
                currentUser.lastName))),
        react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 9 },
            react_1.default.createElement("span", null, "SU MENSAJE DEBE TENER (5000 CARACTERES COMO MAXIMO)"),
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null, "Puede agregar preguntas sobre la mascota"),
                react_1.default.createElement("li", null, "Comentarios hacia el refugio/rescates")),
            react_1.default.createElement(ContactForm_1.ContactForm, { selectedPet: selectedPet, currentUser: currentUser }))));
};
exports.AdopcionDetailMessage = AdopcionDetailMessage;
//# sourceMappingURL=AdopcionDetailMessage.js.map