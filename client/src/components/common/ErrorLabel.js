"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLabel = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const ErrorLabel = ({ errorMessage }) => {
    return react_1.default.createElement(semantic_ui_react_1.Label, { basic: true, style: { marginBottom: 10 }, color: 'red', content: errorMessage });
};
exports.ErrorLabel = ErrorLabel;
//# sourceMappingURL=ErrorLabel.js.map