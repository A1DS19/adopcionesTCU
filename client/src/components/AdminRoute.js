"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoute = void 0;
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const AdminRoute = (_a) => {
    var { Component, prevLocation, exact } = _a, rest = __rest(_a, ["Component", "prevLocation", "exact"]);
    const { currentUser } = react_redux_1.useSelector((state) => state.auth);
    const history = react_router_dom_1.useHistory();
    const handleRedirect = () => {
        history.push('/');
        return react_1.default.createElement("div", null);
    };
    return (react_1.default.createElement(react_router_dom_1.Route, Object.assign({ exact: true }, rest, { render: (props) => currentUser && currentUser.isAdmin ? react_1.default.createElement(Component, Object.assign({}, props)) : handleRedirect() })));
};
exports.AdminRoute = AdminRoute;
//# sourceMappingURL=AdminRoute.js.map