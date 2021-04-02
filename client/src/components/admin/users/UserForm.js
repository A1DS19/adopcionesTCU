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
exports.UserForm = void 0;
const formik_1 = require("formik");
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const semantic_ui_react_1 = require("semantic-ui-react");
const Error_1 = require("../../common/Error");
const Loader_1 = require("../../common/Loader");
const SelectInput_1 = require("../../common/SelectInput");
const TextInput_1 = require("../../common/TextInput");
const react_toastify_1 = require("react-toastify");
const users_1 = require("../../../actions/users/users");
const validationSchemas_1 = require("../../common/validationSchemas");
const UserForm = ({ match, location }) => {
    const userId = match.params.id;
    const { selectedUser } = react_redux_1.useSelector((state) => state.users);
    const { loading, error } = react_redux_1.useSelector((state) => state.loading);
    const history = react_router_1.useHistory();
    const dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        if (location.pathname === '/admin/users/create')
            return;
        dispatch(users_1.fetchSelectedUser(userId.toString()));
        return () => {
            dispatch(users_1.clearSelectedUser());
        };
    }, [dispatch, userId, location.pathname]);
    if (error) {
        return react_1.default.createElement(Error_1.ErrorComponent, null);
    }
    if (loading) {
        return react_1.default.createElement(Loader_1.LoaderComponent, null);
    }
    const initialValues = {
        id: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.id,
        email: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.email,
        password: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.password,
        name: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.name,
        lastName: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.lastName,
        isAdmin: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.isAdmin,
        displayName: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.displayName,
        photoURL: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.photoURL,
        createdAt: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.createdAt,
    };
    const handleSubmit = (values, helpers) => {
        try {
            if (selectedUser) {
                dispatch(users_1.updateUserData(userId.toString(), values, () => {
                    history.push('/admin/users');
                }));
            }
            else {
                dispatch(users_1.createUser(values, () => {
                    history.push('/admin/users');
                }));
            }
        }
        catch (error) {
            react_toastify_1.toast.error(error);
        }
        finally {
            helpers.setSubmitting(false);
        }
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(semantic_ui_react_1.Button, { onClick: () => history.goBack(), color: 'orange', inverted: true, icon: 'arrow left', content: 'Volver' }),
        react_1.default.createElement(semantic_ui_react_1.Segment, { clearing: true },
            react_1.default.createElement(semantic_ui_react_1.Header, { content: selectedUser
                    ? `Modificar Informacion de ${selectedUser.name || selectedUser.displayName}`
                    : 'Crear Usuario' }),
            react_1.default.createElement(formik_1.Formik, { enableReinitialize: true, initialValues: initialValues, validationSchema: !selectedUser ? validationSchemas_1.createUserValidationSchema : validationSchemas_1.updateUserValidationSchema, onSubmit: (values, helpers) => {
                    handleSubmit(values, helpers);
                } }, (props) => (react_1.default.createElement(semantic_ui_react_1.Grid, null,
                react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 8 },
                    react_1.default.createElement(formik_1.Form, { className: 'ui form' },
                        react_1.default.createElement(TextInput_1.TextInput, { label: 'Email', name: 'email', placeholder: 'Email', value: props.values.email, onChange: props.handleChange, onBlur: props.handleBlur }),
                        !selectedUser && (react_1.default.createElement(TextInput_1.TextInput, { type: 'password', label: 'Contrasena', name: 'password', placeholder: 'Contrasena', value: props.values.password, onChange: props.handleChange, onBlur: props.handleBlur })),
                        react_1.default.createElement(TextInput_1.TextInput, { label: 'Nombre', name: 'name', placeholder: 'Nombre', value: props.values.name, onChange: props.handleChange, onBlur: props.handleBlur }),
                        react_1.default.createElement(TextInput_1.TextInput, { label: 'Apellido', name: 'lastName', placeholder: 'Apellido', value: props.values.lastName, onChange: props.handleChange, onBlur: props.handleBlur }),
                        react_1.default.createElement(SelectInput_1.SelectInput, { label: 'Administrador', name: 'isAdmin', placeholder: 'Administrador', value: props.values.isAdmin, onChange: props.handleChange, onBlur: props.handleBlur, options: [
                                { key: 0, value: 'true', text: 'Si' },
                                { key: 1, value: 'false', text: 'No' },
                            ] }),
                        react_1.default.createElement(TextInput_1.TextInput, { label: 'Nombre de Usuario', name: 'displayName', placeholder: 'Nombre de Usuario', value: props.values.displayName, onChange: props.handleChange, onBlur: props.handleBlur }),
                        react_1.default.createElement(semantic_ui_react_1.Button, { loading: props.isSubmitting, disabled: !props.isValid || !props.dirty || props.isSubmitting, type: 'submit', fluid: true, size: 'large', color: 'orange', content: selectedUser ? 'ACTUALIZAR' : 'CREAR' })))))))));
};
exports.UserForm = UserForm;
//# sourceMappingURL=UserForm.js.map