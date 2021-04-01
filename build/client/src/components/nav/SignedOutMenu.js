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
exports.SignedOutMenu = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const semantic_ui_react_1 = require("semantic-ui-react");
const modals_1 = require("../../actions/modals");
const SignedOutMenu = () => {
    const dispatch = react_redux_1.useDispatch();
    const handleAuth = (button) => {
        if (button === 'login') {
            dispatch(modals_1.openModal({ type: 'LoginForm' }));
        }
        else {
            dispatch(modals_1.openModal({ type: 'RegisterForm' }));
        }
    };
    return (<react_1.Fragment>
      <semantic_ui_react_1.Menu.Item position='right'>
        <semantic_ui_react_1.Button basic inverted content='LOGIN' onClick={() => handleAuth('login')}/>
        <semantic_ui_react_1.Button style={{ marginLeft: '0.5em' }} basic inverted content='REGISTRO' onClick={() => handleAuth('register')}/>
      </semantic_ui_react_1.Menu.Item>
    </react_1.Fragment>);
};
exports.SignedOutMenu = SignedOutMenu;
