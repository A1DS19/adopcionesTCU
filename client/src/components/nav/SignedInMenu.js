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
exports.SignedInMenu = void 0;
const react_1 = __importStar(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const react_router_dom_1 = require("react-router-dom");
const AdminMenu_1 = require("./AdminMenu");
const SignedInMenu = ({ currentUser, handleSignOut, }) => {
    return (<react_1.Fragment>
      <semantic_ui_react_1.Menu.Item position='right'>
        <semantic_ui_react_1.Image avatar spaced='right' src={(currentUser === null || currentUser === void 0 ? void 0 : currentUser.photoURL) || '/assets/user.png'}/>
        <semantic_ui_react_1.Dropdown pointing='top left' text={currentUser === null || currentUser === void 0 ? void 0 : currentUser.displayName}>
          <semantic_ui_react_1.Dropdown.Menu>
            <semantic_ui_react_1.Dropdown.Item as={react_router_dom_1.Link} to={`/profile/${currentUser === null || currentUser === void 0 ? void 0 : currentUser.id}`} text='MI PERFIL' icon='user'/>
            <semantic_ui_react_1.Dropdown.Item text='SALIR' icon='power' onClick={handleSignOut}/>
          </semantic_ui_react_1.Dropdown.Menu>
        </semantic_ui_react_1.Dropdown>
      </semantic_ui_react_1.Menu.Item>
      {(currentUser === null || currentUser === void 0 ? void 0 : currentUser.isAdmin) === 'true' && <AdminMenu_1.AdminMenu />}
    </react_1.Fragment>);
};
exports.SignedInMenu = SignedInMenu;