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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactForm = void 0;
const react_1 = __importStar(require("react"));
const formik_1 = require("formik");
const semantic_ui_react_1 = require("semantic-ui-react");
const TextInput_1 = require("../../common/TextInput");
const TextArea_1 = require("../../common/TextArea");
const validationSchemas_1 = require("../../common/validationSchemas");
const react_redux_1 = require("react-redux");
const ErrorLabel_1 = require("../../common/ErrorLabel");
const pets_1 = require("../../../actions/pets/pets");
const ContactForm = ({ selectedPet, currentUser }) => {
    const dispatch = react_redux_1.useDispatch();
    console.log(selectedPet);
    const initialValues = {
        message: '',
        email: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email) || '',
        userName: currentUser ? `${currentUser.name} ${currentUser.lastName}` : '',
    };
    return (<formik_1.Formik initialValues={initialValues} validationSchema={currentUser ? validationSchemas_1.currentUserFormValidationSchema : validationSchemas_1.noCurrentUserFormValidationSchema} onSubmit={(values, helpers) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            helpers.setSubmitting(true);
            dispatch(pets_1.sendEmail(selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.id, values));
        }
        catch (error) {
            helpers.setErrors({ error: error.message });
        }
        finally {
            helpers.setSubmitting(false);
        }
    })}>
      {(props) => (<formik_1.Form className='ui form'>
          {props.errors.error && <ErrorLabel_1.ErrorLabel errorMessage={props.errors.error}/>}
          {!currentUser && (<react_1.Fragment>
              <TextInput_1.TextInput name='email' placeholder='Email' value={props.values.email} onChange={props.handleChange} onBlur={props.handleBlur}/>

              <TextInput_1.TextInput name='userName' placeholder='Su nombre' value={props.values.userName} onChange={props.handleChange} onBlur={props.handleBlur}/>
            </react_1.Fragment>)}

          <TextArea_1.TextArea name='message' placeholder={`Me pregunto si ${selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.name}...`} value={props.values.message} onChange={props.handleChange} onBlur={props.handleBlur}/>

          <semantic_ui_react_1.Button loading={props.isSubmitting} disabled={!props.isValid || !props.dirty || props.isSubmitting} type='submit' fluid size='large' color='orange' content='ENVIAR'/>
        </formik_1.Form>)}
    </formik_1.Formik>);
};
exports.ContactForm = ContactForm;
