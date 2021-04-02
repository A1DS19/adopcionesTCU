"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionDetailSidebar = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const react_scroll_1 = require("react-scroll");
const AdopcionDetailSidebar = ({ selectedPet }) => {
    return (react_1.default.createElement(semantic_ui_react_1.Segment, { textAlign: 'center' },
        react_1.default.createElement(semantic_ui_react_1.Button.Group, { vertical: true },
            react_1.default.createElement(semantic_ui_react_1.Button, { style: { marginBottom: '10px' }, as: react_scroll_1.Link, basic: true, to: 'contact-form', spy: true, smooth: true, size: 'medium', color: 'orange', content: `PREGUNTAR ACERCA DE ${selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.name.toLocaleUpperCase()}` }),
            react_1.default.createElement(semantic_ui_react_1.Button, { basic: true, color: 'orange', size: 'medium', animated: 'vertical' },
                react_1.default.createElement(semantic_ui_react_1.Button.Content, { hidden: true, content: react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'share' }) }),
                react_1.default.createElement(semantic_ui_react_1.Button.Content, { visible: true, content: 'COMPARTIR' })))));
};
exports.AdopcionDetailSidebar = AdopcionDetailSidebar;
//# sourceMappingURL=AdopcionDetailSidebar.js.map