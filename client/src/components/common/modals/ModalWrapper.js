"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalWrapper = void 0;
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const semantic_ui_react_1 = require("semantic-ui-react");
const modals_1 = require("../../../actions/modals");
const ModalWrapper = ({ children, header, size }) => {
    const dispatch = react_redux_1.useDispatch();
    return (react_1.default.createElement(semantic_ui_react_1.Modal, { open: true, onClose: () => dispatch(modals_1.closeModal()), header: header, size: size },
        header && react_1.default.createElement(semantic_ui_react_1.Modal.Header, null, header),
        react_1.default.createElement(semantic_ui_react_1.Modal.Content, null, children)));
};
exports.ModalWrapper = ModalWrapper;
//# sourceMappingURL=ModalWrapper.js.map