"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound404 = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const react_router_dom_1 = require("react-router-dom");
function NotFound404() {
    return (react_1.default.createElement(semantic_ui_react_1.Grid, { divided: true, centered: true, "text-align": 'center' },
        react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 4 },
            react_1.default.createElement("h1", null, "404"),
            react_1.default.createElement("h3", null, "Pagina no encontrada")),
        react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 6 },
            react_1.default.createElement(semantic_ui_react_1.Button, { style: { marginTop: '17px' }, as: react_router_dom_1.Link, size: 'large', icon: 'left arrow', color: 'orange', content: 'VOLVER', to: '/' }))));
}
exports.NotFound404 = NotFound404;
//# sourceMappingURL=NotFound404.js.map