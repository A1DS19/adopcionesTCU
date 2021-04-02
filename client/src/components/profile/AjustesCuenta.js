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
exports.AjustesCuenta = void 0;
const formik_1 = require("formik");
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const semantic_ui_react_1 = require("semantic-ui-react");
const auth_1 = require("../../actions/auth");
const TextInput_1 = require("../common/TextInput");
const validationSchemas_1 = require("../common/validationSchemas");
const AjustesCuenta = ({ loading, currentUser }) => {
    const [openConfirm, setConfirm] = react_1.useState(false);
    const dispatch = react_redux_1.useDispatch();
    const history = react_router_1.useHistory();
    const initialValues = {
        newPassword: '',
        confirmPassword: '',
        oldPassword: '',
    };
    const handleDeleteAccount = () => {
        var _a;
        dispatch(auth_1.deleteUser((_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) === null || _a === void 0 ? void 0 : _a.toString()));
        setConfirm(false);
    };
    return (react_1.default.createElement(semantic_ui_react_1.Tab.Pane, { attached: false },
        react_1.default.createElement(semantic_ui_react_1.Header, { content: 'Crear nueva Contrasena' }),
        react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validationSchema: validationSchemas_1.updatePasswordValidationSchema, onSubmit: (values, helpers) => {
                var _a;
                try {
                    helpers.setSubmitting(true);
                    dispatch(auth_1.updateUserPassword((_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) === null || _a === void 0 ? void 0 : _a.toString(), values));
                    history.push(`/`);
                }
                catch (error) {
                    helpers.setErrors({ error: error.message });
                }
                finally {
                    helpers.setSubmitting(false);
                }
            } }, (props) => (react_1.default.createElement(formik_1.Form, { className: 'ui form', style: { maxWidth: '450px' } },
            react_1.default.createElement(TextInput_1.TextInput, { name: 'oldPassword', label: 'Antigua Contrasena', placeholder: 'Antigua Contrasena', type: 'password', value: props.values.oldPassword, onChange: props.handleChange, onBlur: props.handleBlur }),
            react_1.default.createElement(TextInput_1.TextInput, { name: 'newPassword', label: 'Nueva Contrasena', type: 'password', placeholder: 'Nueva Contrasena', value: props.values.newPassword, onChange: props.handleChange, onBlur: props.handleBlur }),
            react_1.default.createElement(TextInput_1.TextInput, { name: 'confirmPassword', type: 'password', label: 'Confirmar Nueva Contrasena', placeholder: 'Confirmar Nueva Contrasena', value: props.values.confirmPassword, onChange: props.handleChange, onBlur: props.handleBlur }),
            react_1.default.createElement(semantic_ui_react_1.Button, { loading: props.isSubmitting, disabled: !props.isValid || !props.dirty || props.isSubmitting, fluid: true, type: 'submit', size: 'large', color: 'orange', content: 'ACTUALIZAR CONTRASENA' })))),
        react_1.default.createElement("div", { style: { maxWidth: '450px', marginTop: '15px' } },
            react_1.default.createElement(semantic_ui_react_1.Header, { color: 'red', content: 'Eliminar Cuenta' }),
            react_1.default.createElement(semantic_ui_react_1.Button, { onClick: () => setConfirm(true), inverted: true, color: 'red', size: 'large', content: 'ELIMINAR CUENTA', fluid: true })),
        react_1.default.createElement(semantic_ui_react_1.Confirm, { content: 'Esta seguro que desea borrar su cuenta?', cancelButton: 'CANCELAR', confirmButton: 'BORRAR', open: openConfirm, onCancel: () => setConfirm(false), onConfirm: handleDeleteAccount })));
};
exports.AjustesCuenta = AjustesCuenta;
//# sourceMappingURL=AjustesCuenta.js.map