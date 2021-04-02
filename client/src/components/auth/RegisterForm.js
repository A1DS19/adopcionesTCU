"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterForm = void 0;
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const semantic_ui_react_1 = require("semantic-ui-react");
const TextInput_1 = require("../common/TextInput");
const validationSchemas_1 = require("../common/validationSchemas");
const ModalWrapper_1 = require("../common/modals/ModalWrapper");
const react_redux_1 = require("react-redux");
const auth_1 = require("../../actions/auth");
const ErrorLabel_1 = require("../common/ErrorLabel");
const RegisterForm = () => {
    const dispatch = react_redux_1.useDispatch();
    const initialValues = {
        email: '',
        displayName: '',
        password: '',
    };
    return (react_1.default.createElement(ModalWrapper_1.ModalWrapper, { header: 'REGISTRO', size: 'mini' },
        react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validationSchema: validationSchemas_1.registerValidationSchema, onSubmit: (values, helpers) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    helpers.setSubmitting(true);
                    dispatch(auth_1.registerUser(values));
                }
                catch (error) {
                    helpers.setErrors({ authError: error });
                }
                finally {
                    helpers.setSubmitting(false);
                }
            }) }, (props) => (react_1.default.createElement(formik_1.Form, { className: 'ui form' },
            props.errors.authError && (react_1.default.createElement(ErrorLabel_1.ErrorLabel, { errorMessage: props.errors.authError })),
            react_1.default.createElement(TextInput_1.TextInput, { name: 'email', placeholder: 'EMAIL', value: props.values.email, onChange: props.handleChange, onBlur: props.handleBlur }),
            react_1.default.createElement(TextInput_1.TextInput, { name: 'displayName', placeholder: 'NOMBRE USUARIO', value: props.values.displayName, onChange: props.handleChange, onBlur: props.handleBlur }),
            react_1.default.createElement(TextInput_1.TextInput, { type: 'password', name: 'password', placeholder: 'CONTRASENA', value: props.values.password, onChange: props.handleChange, onBlur: props.handleBlur }),
            react_1.default.createElement(semantic_ui_react_1.Button, { loading: props.isSubmitting, disabled: !props.isValid || !props.dirty || props.isSubmitting, type: 'submit', fluid: true, size: 'large', color: 'teal', content: 'REGISTRO' }))))));
};
exports.RegisterForm = RegisterForm;
//# sourceMappingURL=RegisterForm.js.map