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
exports.ProfilePage = void 0;
const react_1 = __importStar(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const ProfileContent_1 = require("./ProfileContent");
const react_redux_1 = require("react-redux");
const auth_1 = require("../../actions/auth");
const ProfilePage = ({ match }) => {
    const userId = match.params.id;
    const dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        dispatch(auth_1.fetchCurrentUser(userId));
    }, [dispatch, userId]);
    const { loading, error } = react_redux_1.useSelector((state) => state.loading);
    const { currentUser } = react_redux_1.useSelector((state) => state.auth);
    return (react_1.default.createElement(semantic_ui_react_1.Grid, null,
        react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 16 },
            react_1.default.createElement(ProfileContent_1.ProfileContent, { loading: loading, error: error, currentUser: currentUser }))));
};
exports.ProfilePage = ProfilePage;
//# sourceMappingURL=ProfilePage.js.map