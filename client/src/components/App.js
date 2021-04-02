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
require("../App.css");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const semantic_ui_react_1 = require("semantic-ui-react");
const react_toastify_1 = require("react-toastify");
const Navbar_1 = require("../components/nav/Navbar");
const ModalManager_1 = require("../components/common/modals/ModalManager");
const AdopcionDashboard_1 = require("./adopciones/adopcionesDashboard/AdopcionDashboard");
const AdopcionDetail_1 = require("./adopciones/adopcionesDetail/AdopcionDetail");
const ProfilePage_1 = require("./profile/ProfilePage");
const Footer_1 = require("./Footer");
const PetList_1 = require("./admin/pets/PetList");
const PetForm_1 = require("./admin/pets/PetForm");
const UserList_1 = require("./admin/users/UserList");
const UserForm_1 = require("./admin/users/UserForm");
const NotFound404_1 = require("./NotFound404");
const AuthRoute_1 = require("./AuthRoute");
const AdminRoute_1 = require("./AdminRoute");
function App() {
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(ModalManager_1.ModalManager, null),
        react_1.default.createElement(react_toastify_1.ToastContainer, { position: 'bottom-right', autoClose: 3000, closeOnClick: true, pauseOnHover: true }),
        react_1.default.createElement(Navbar_1.Navbar, null),
        react_1.default.createElement(semantic_ui_react_1.Container, { className: 'main' },
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/' },
                    react_1.default.createElement(react_router_dom_1.Redirect, { to: '/adoptions' })),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/adoptions', component: AdopcionDashboard_1.AdopcionDashboard }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/adoption/:id', component: AdopcionDetail_1.AdopcionDetail }),
                react_1.default.createElement(AuthRoute_1.AuthRoute, { path: '/profile/:id', Component: ProfilePage_1.ProfilePage }),
                react_1.default.createElement(AdminRoute_1.AdminRoute, { exact: true, path: '/admin/pets', Component: PetList_1.PetList }),
                react_1.default.createElement(AdminRoute_1.AdminRoute, { exact: true, path: '/admin/users', Component: UserList_1.UserList }),
                react_1.default.createElement(AdminRoute_1.AdminRoute, { path: ['/admin/pets/create', '/admin/pets/:id'], Component: PetForm_1.PetForm }),
                react_1.default.createElement(AdminRoute_1.AdminRoute, { path: ['/admin/users/create', '/admin/users/:id'], Component: UserForm_1.UserForm }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '*', component: NotFound404_1.NotFound404 }))),
        react_1.default.createElement(Footer_1.Footer, null)));
}
exports.default = App;
//# sourceMappingURL=App.js.map