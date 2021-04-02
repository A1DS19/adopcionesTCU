"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminMenu = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const AdminMenu = () => {
    return (react_1.default.createElement(semantic_ui_react_1.Menu.Item, null,
        react_1.default.createElement(semantic_ui_react_1.Image, { avatar: true, spaced: 'right', src: '/assets/admin.png' }),
        react_1.default.createElement(semantic_ui_react_1.Dropdown, { pointing: 'top left', text: 'Admin' },
            react_1.default.createElement(semantic_ui_react_1.Dropdown.Menu, null,
                react_1.default.createElement(semantic_ui_react_1.Dropdown.Item, { as: react_router_dom_1.Link, to: '/admin/pets', icon: 'paw', text: 'Mascotas' }),
                react_1.default.createElement(semantic_ui_react_1.Dropdown.Item, { as: react_router_dom_1.Link, to: '/admin/users', icon: 'user', text: 'Usuarios' })))));
};
exports.AdminMenu = AdminMenu;
//# sourceMappingURL=AdminMenu.js.map