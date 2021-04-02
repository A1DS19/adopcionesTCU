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
exports.ErrorComponent = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const loading_1 = require("../../actions/loading/loading");
const ErrorComponent = () => {
    const { error } = react_redux_1.useSelector((state) => state.loading);
    const dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        return () => {
            dispatch(loading_1.clearError());
        };
    });
    return (react_1.default.createElement(semantic_ui_react_1.Segment, { placeholder: true },
        react_1.default.createElement(semantic_ui_react_1.Header, { textAlign: 'center', content: error || 'Ha ocurrido un error inesperado...' }),
        react_1.default.createElement(semantic_ui_react_1.Button, { as: react_router_dom_1.Link, to: '/adoptions', primary: true, style: { marginTop: 20 }, content: 'Volver a adopciones' })));
};
exports.ErrorComponent = ErrorComponent;
//# sourceMappingURL=Error.js.map