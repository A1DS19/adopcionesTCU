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
    return (<semantic_ui_react_1.Grid divided centered text-align='center'>
      <semantic_ui_react_1.Grid.Column width={4}>
        <h1>404</h1>
        <h3>Pagina no encontrada</h3>
      </semantic_ui_react_1.Grid.Column>
      <semantic_ui_react_1.Grid.Column width={6}>
        <semantic_ui_react_1.Button style={{ marginTop: '17px' }} as={react_router_dom_1.Link} size='large' icon='left arrow' color='orange' content='VOLVER' to='/'/>
      </semantic_ui_react_1.Grid.Column>
    </semantic_ui_react_1.Grid>);
}
exports.NotFound404 = NotFound404;
