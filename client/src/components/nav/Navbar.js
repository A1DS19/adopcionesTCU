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
exports.Navbar = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const auth_1 = require("../../actions/auth");
const SignedInMenu_1 = require("./SignedInMenu");
const SignedOutMenu_1 = require("./SignedOutMenu");
const Navbar = () => {
    const history = react_router_dom_1.useHistory();
    const dispatch = react_redux_1.useDispatch();
    const { authenticated, currentUser, userId } = react_redux_1.useSelector((state) => state.auth);
    react_1.useEffect(() => {
        dispatch(auth_1.fetchCurrentUser(userId));
    }, [dispatch, userId]);
    const handleLogOut = () => {
        dispatch(auth_1.signOutUser());
        history.push('/');
    };
    return (react_1.default.createElement("div", { id: 'nav' },
        react_1.default.createElement(semantic_ui_react_1.Menu, { inverted: true, fixed: 'top' },
            react_1.default.createElement(semantic_ui_react_1.Container, null,
                react_1.default.createElement(semantic_ui_react_1.Menu.Item, { header: true, onClick: () => history.push('/') },
                    react_1.default.createElement("img", { src: '/assets/pet-house.png', alt: 'logo', style: { marginRight: '15px' } }),
                    "ADOPTME.CR"),
                react_1.default.createElement(semantic_ui_react_1.Menu.Item, { as: react_router_dom_1.NavLink, to: '/adoptions', name: 'MASCOTAS' }),
                authenticated ? (react_1.default.createElement(react_1.Fragment, null,
                    react_1.default.createElement(SignedInMenu_1.SignedInMenu, { currentUser: currentUser, handleSignOut: handleLogOut }))) : (react_1.default.createElement(SignedOutMenu_1.SignedOutMenu, null))))));
};
exports.Navbar = Navbar;
//# sourceMappingURL=Navbar.js.map