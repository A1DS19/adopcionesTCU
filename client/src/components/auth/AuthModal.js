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
    return (react_1.default.createElement(semantic_ui_react_1.Modal, { open: open, size: 'mini', onClose: handleClose },
        react_1.default.createElement(semantic_ui_react_1.Modal.Header, { content: 'Necesita iniciar sesion para accesar al contenido' }),
        react_1.default.createElement(semantic_ui_react_1.Modal.Content, null,
            react_1.default.createElement("p", null, "Necesita iniciar sesion o registrarse"),
            react_1.default.createElement(semantic_ui_react_1.Button.Group, { widths: '4' },
                react_1.default.createElement(semantic_ui_react_1.Button, { fluid: true, color: 'teal', content: 'Login', onClick: () => openModals('LoginForm') }),
                react_1.default.createElement(semantic_ui_react_1.Button.Or, null),
                react_1.default.createElement(semantic_ui_react_1.Button, { fluid: true, color: 'orange', content: 'Registro', onClick: () => openModals('RegisterForm') })),
            react_1.default.createElement(semantic_ui_react_1.Divider, null),
            react_1.default.createElement("div", { style: { textAlign: 'center' } },
                react_1.default.createElement("p", null, "O click en cancelar para volver a la pagina principal"),
                react_1.default.createElement(semantic_ui_react_1.Button, { onClick: handleClose, content: 'Cancelar' })))));
};
exports.AuthModal = AuthModal;
//# sourceMappingURL=AuthModal.js.map