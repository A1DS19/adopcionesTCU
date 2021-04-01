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
exports.SocialLogin = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const semantic_ui_react_1 = require("semantic-ui-react");
const modals_1 = require("../../actions/modals");
const SocialLogin = () => {
    const dispatch = react_redux_1.useDispatch();
    const handleModal = () => {
        dispatch(modals_1.closeModal());
    };
    return (<react_1.Fragment>
      <semantic_ui_react_1.Button icon='facebook' fluid color='facebook' content='Login con Facebook' style={{ marginBottom: 10 }} onClick={() => handleModal()}/>
      <semantic_ui_react_1.Button icon='google' fluid color='google plus' content='Login con Google' style={{ marginBottom: 10 }} onClick={() => handleModal()}/>
    </react_1.Fragment>);
};
exports.SocialLogin = SocialLogin;
