"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateInput = void 0;
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const semantic_ui_react_1 = require("semantic-ui-react");
const react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
const DateInput = (props) => {
    const { setFieldValue } = formik_1.useFormikContext();
    const [field, meta] = formik_1.useField(props);
    return (
    // '!!' para convertir meta.error en un boolean
    react_1.default.createElement(semantic_ui_react_1.FormField, { error: meta.touched && !!meta.error },
        react_1.default.createElement("label", null, props.label),
        react_1.default.createElement(react_datepicker_1.default, Object.assign({}, field, props, { selected: (field.value && new Date(field.value)) || null, onChange: (value) => setFieldValue(field.name, value), placeholderText: props.placeholder })),
        meta.touched && meta.error ? (react_1.default.createElement(semantic_ui_react_1.Label, { basic: true, color: 'red' }, meta.error)) : null));
};
exports.DateInput = DateInput;
//# sourceMappingURL=DateInput.js.map