"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MisDatosTab = void 0;
const formik_1 = require("formik");
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const ErrorLabel_1 = require("../common/ErrorLabel");
const TextInput_1 = require("../common/TextInput");
const CambiarFoto_1 = require("./CambiarFoto");
const auth_1 = require("../../actions/auth");
const validationSchemas_1 = require("../common/validationSchemas");
const react_redux_1 = require("react-redux");
const MisDatosTab = ({ loading, currentUser }) => {
    const dispatch = react_redux_1.useDispatch();
    const initialValues = {
        name: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.name) || '',
        lastName: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.lastName) || '',
        displayName: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.displayName) || '',
    };
    return (react_1.default.createElement(semantic_ui_react_1.Tab.Pane, { loading: loading, attached: false },
        react_1.default.createElement(semantic_ui_react_1.Header, { content: 'Actualizar Datos Personales' }),
        react_1.default.createElement(formik_1.Formik, { validationSchema: validationSchemas_1.updatePersonalDataValidationSchema, initialValues: initialValues, enableReinitialize: true, onSubmit: (values, helpers) => {
                try {
                    helpers.setSubmitting(true);
                    dispatch(auth_1.updateCurrentUser(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id, values));
                }
                catch (error) {
                    helpers.setErrors({ error: error.message });
                }
                finally {
                    helpers.setSubmitting(false);
                }
            } }, (props) => (react_1.default.createElement(semantic_ui_react_1.Grid, null,
            react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 9 },
                react_1.default.createElement(formik_1.Form, { className: 'ui form' },
                    props.errors.error && react_1.default.createElement(ErrorLabel_1.ErrorLabel, { errorMessage: props.errors.error }),
                    react_1.default.createElement(TextInput_1.TextInput, { name: 'displayName', label: 'Usuario', placeholder: 'Usuario', value: props.values.displayName, onChange: props.handleChange, onBlur: props.handleBlur }),
                    react_1.default.createElement(TextInput_1.TextInput, { name: 'name', label: 'Nombre', placeholder: 'Nombre', value: props.values.name, onChange: props.handleChange, onBlur: props.handleBlur }),
                    react_1.default.createElement(TextInput_1.TextInput, { name: 'lastName', label: 'Apellido', placeholder: 'Apellido', value: props.values.lastName, onChange: props.handleChange, onBlur: props.handleBlur }),
                    react_1.default.createElement(semantic_ui_react_1.Button, { loading: props.isSubmitting, disabled: !props.isValid || !props.dirty || props.isSubmitting, fluid: true, type: 'submit', size: 'large', color: 'orange', content: 'ACTUALIZAR DATOS' }))),
            react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 7 },
                react_1.default.createElement(CambiarFoto_1.PhotoUpload, { currentUser: currentUser })))))));
};
exports.MisDatosTab = MisDatosTab;
//# sourceMappingURL=MisDatosTab.js.map