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
exports.AuthRoute = void 0;
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const AuthRoute = (_a) => {
    var { Component, prevLocation } = _a, rest = __rest(_a, ["Component", "prevLocation"]);
    const { authenticated } = react_redux_1.useSelector((state) => state.auth);
    const history = react_router_dom_1.useHistory();
    const handleRedirect = () => {
        history.push('/');
        return <div></div>;
    };
    return (<react_router_dom_1.Route {...rest} render={(props) => (authenticated ? <Component {...props}/> : handleRedirect())}/>);
};
exports.AuthRoute = AuthRoute;
