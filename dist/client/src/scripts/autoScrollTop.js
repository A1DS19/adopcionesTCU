"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollToTop = void 0;
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const ScrollToTop = () => {
    const { pathname } = react_router_dom_1.useLocation();
    react_1.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};
exports.ScrollToTop = ScrollToTop;