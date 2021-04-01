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
    return (<semantic_ui_react_1.Menu.Item>
      <semantic_ui_react_1.Image avatar spaced='right' src='/assets/admin.png'/>
      <semantic_ui_react_1.Dropdown pointing='top left' text='Admin'>
        <semantic_ui_react_1.Dropdown.Menu>
          <semantic_ui_react_1.Dropdown.Item as={react_router_dom_1.Link} to='/admin/pets' icon='paw' text='Mascotas'/>
          <semantic_ui_react_1.Dropdown.Item as={react_router_dom_1.Link} to='/admin/users' icon='user' text='Usuarios'/>
        </semantic_ui_react_1.Dropdown.Menu>
      </semantic_ui_react_1.Dropdown>
    </semantic_ui_react_1.Menu.Item>);
};
exports.AdminMenu = AdminMenu;
