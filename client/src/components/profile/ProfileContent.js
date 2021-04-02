"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileContent = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const MisDatosTab_1 = require("./MisDatosTab");
const AjustesCuenta_1 = require("./AjustesCuenta");
const ProfileContent = ({ currentUser, loading, error }) => {
    const panes = [
        {
            menuItem: 'Mis Datos',
            render: () => react_1.default.createElement(MisDatosTab_1.MisDatosTab, { loading: loading, currentUser: currentUser }),
        },
        {
            menuItem: 'Ajustes de Cuenta',
            render: () => react_1.default.createElement(AjustesCuenta_1.AjustesCuenta, { loading: loading, currentUser: currentUser }),
        },
    ];
    return (react_1.default.createElement(semantic_ui_react_1.Segment, { loading: loading },
        react_1.default.createElement(semantic_ui_react_1.Header, { as: 'h1', content: 'Mi Perfil' }),
        react_1.default.createElement(semantic_ui_react_1.Tab, { menu: { secondary: true, pointing: true }, panes: panes })));
};
exports.ProfileContent = ProfileContent;
//# sourceMappingURL=ProfileContent.js.map