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
exports.LoginForm = void 0;
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const semantic_ui_react_1 = require("semantic-ui-react");
const TextInput_1 = require("../common/TextInput");
const validationSchemas_1 = require("../common/validationSchemas");
const ModalWrapper_1 = require("../common/modals/ModalWrapper");
const react_redux_1 = require("react-redux");
const ErrorLabel_1 = require("../common/ErrorLabel");
const auth_1 = require("../../actions/auth");
const LoginForm = () => {
    const dispatch = react_redux_1.useDispatch();
    const initialValues = {
        email: '',
        password: '',
    };
    return (<ModalWrapper_1.ModalWrapper header='INICIAR SESION' size='mini'>
      <formik_1.Formik initialValues={initialValues} validationSchema={validationSchemas_1.loginValidationSchema} onSubmit={(values, helpers) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                helpers.setSubmitting(true);
                dispatch(auth_1.signInUser(values));
            }
            catch (error) {
                helpers.setErrors({ authError: error.response.data.msg });
            }
            finally {
                helpers.setSubmitting(false);
            }
        })}>
        {(props) => (<formik_1.Form className='ui form'>
            {props.errors.authError && (<ErrorLabel_1.ErrorLabel errorMessage={props.errors.authError}/>)}
            <TextInput_1.TextInput name='email' placeholder='EMAIL' value={props.values.email} onChange={props.handleChange} onBlur={props.handleBlur}/>

            <TextInput_1.TextInput type='password' name='password' placeholder='CONTRASENA' value={props.values.password} onChange={props.handleChange} onBlur={props.handleBlur}/>

            <semantic_ui_react_1.Button loading={props.isSubmitting} disabled={!props.isValid || !props.dirty || props.isSubmitting} type='submit' fluid size='large' color='teal' content='LOGIN'/>
          </formik_1.Form>)}
      </formik_1.Formik>
    </ModalWrapper_1.ModalWrapper>);
};
exports.LoginForm = LoginForm;
