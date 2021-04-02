"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const formik_1 = require("formik");
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const TextInput_1 = require("./common/TextInput");
const validationSchemas_1 = require("./common/validationSchemas");
const react_scroll_1 = require("react-scroll");
const ErrorLabel_1 = require("./common/ErrorLabel");
const Footer = () => {
    const initialValues = {
        email: '',
    };
    return (react_1.default.createElement(semantic_ui_react_1.Segment, { style: { marginTop: '50px' } },
        react_1.default.createElement(semantic_ui_react_1.Header, { as: 'h2', textAlign: 'center', content: 'ADOPTME.CR' }),
        react_1.default.createElement(semantic_ui_react_1.Grid, null,
            react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 10 },
                react_1.default.createElement("h3", null,
                    "SEGUIR ",
                    react_1.default.createElement("span", null, "#ADOPTMECR"),
                    ' '),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(semantic_ui_react_1.Icon, { size: 'large', name: 'facebook' }),
                    react_1.default.createElement(semantic_ui_react_1.Icon, { size: 'large', name: 'instagram' }),
                    react_1.default.createElement(semantic_ui_react_1.Icon, { size: 'large', name: 'twitter' }))),
            react_1.default.createElement(semantic_ui_react_1.Grid.Column, { width: 6 },
                react_1.default.createElement("h3", null, "NEWSLETTER"),
                react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validationSchema: validationSchemas_1.newsLetterValidationSchema, onSubmit: (values, helpers) => {
                        try {
                            helpers.setSubmitting(true);
                            console.log(values);
                        }
                        catch (error) {
                            helpers.setErrors({ error: error.message });
                        }
                        finally {
                            helpers.setSubmitting(false);
                        }
                    } }, (props) => (react_1.default.createElement(formik_1.Form, { className: 'ui form' },
                    props.errors.error && react_1.default.createElement(ErrorLabel_1.ErrorLabel, { errorMessage: props.errors.error }),
                    react_1.default.createElement(TextInput_1.TextInput, { name: 'email', placeholder: 'EMAIL', value: props.values.email, onChange: props.handleChange, onBlur: props.handleBlur }),
                    react_1.default.createElement(semantic_ui_react_1.Button, { loading: props.isSubmitting, 
                        //disabled={!props.isValid || !props.dirty || props.isSubmitting}
                        disabled: true, type: 'submit', fluid: true, size: 'large', color: 'orange', content: 'SUBSCRIBIR' })))))),
        react_1.default.createElement(react_scroll_1.Link, { to: 'nav', spy: true, smooth: true },
            react_1.default.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'black',
                } },
                react_1.default.createElement("h4", null, "VOLVER ARRIBA"),
                react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'arrow up' })))));
};
exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map