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
    return (<semantic_ui_react_1.Modal open={true} onClose={() => dispatch(modals_1.closeModal())} header={header} size={size}>
      {header && <semantic_ui_react_1.Modal.Header>{header}</semantic_ui_react_1.Modal.Header>}

      <semantic_ui_react_1.Modal.Content>{children}</semantic_ui_react_1.Modal.Content>
    </semantic_ui_react_1.Modal>);
};
exports.ModalWrapper = ModalWrapper;
