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
exports.AuthModal = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const semantic_ui_react_1 = require("semantic-ui-react");
const modals_1 = require("../../actions/modals");
const AuthModal = ({ setModalOpen }) => {
    const [open, setOpen] = react_1.useState(true);
    const dispatch = react_redux_1.useDispatch();
    const history = react_router_1.useHistory();
    const handleClose = () => {
        setOpen(false);
        setModalOpen && setModalOpen(false);
        history.goBack();
    };
    const openModals = (type) => {
        if (type === 'LoginForm') {
            dispatch(modals_1.openModal({ type }));
        }
        else {
            dispatch(modals_1.openModal({ type }));
        }
        handleClose();
    };
    return (<semantic_ui_react_1.Modal open={open} size='mini' onClose={handleClose}>
      <semantic_ui_react_1.Modal.Header content='Necesita iniciar sesion para accesar al contenido'/>
      <semantic_ui_react_1.Modal.Content>
        <p>Necesita iniciar sesion o registrarse</p>
        <semantic_ui_react_1.Button.Group widths='4'>
          <semantic_ui_react_1.Button fluid color='teal' content='Login' onClick={() => openModals('LoginForm')}/>
          <semantic_ui_react_1.Button.Or />
          <semantic_ui_react_1.Button fluid color='orange' content='Registro' onClick={() => openModals('RegisterForm')}/>
        </semantic_ui_react_1.Button.Group>
        <semantic_ui_react_1.Divider />
        <div style={{ textAlign: 'center' }}>
          <p>O click en cancelar para volver a la pagina principal</p>
          <semantic_ui_react_1.Button onClick={handleClose} content='Cancelar'/>
        </div>
      </semantic_ui_react_1.Modal.Content>
    </semantic_ui_react_1.Modal>);
};
exports.AuthModal = AuthModal;
