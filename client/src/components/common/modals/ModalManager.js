"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalManager = void 0;
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const LoginForm_1 = require("../../auth/LoginForm");
const RegisterForm_1 = require("../../auth/RegisterForm");
const ModalManager = () => {
    const modalLookup = { LoginForm: LoginForm_1.LoginForm, RegisterForm: RegisterForm_1.RegisterForm };
    const currentModal = react_redux_1.useSelector((state) => state.modals);
    let renderedModal;
    if (currentModal) {
        const { type, props } = currentModal;
        const ModalComponent = modalLookup[type];
        renderedModal = react_1.default.createElement(ModalComponent, Object.assign({}, props));
    }
    return react_1.default.createElement("span", null, renderedModal);
};
exports.ModalManager = ModalManager;
// if (LoginForm.name === currentModal.type) {
//   return <LoginForm {...currentModal.props} />;
// }
//# sourceMappingURL=ModalManager.js.map