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
    return (<semantic_ui_react_1.Segment style={{ marginTop: '50px' }}>
      <semantic_ui_react_1.Header as='h2' textAlign='center' content='ADOPTME.CR'/>
      <semantic_ui_react_1.Grid>
        <semantic_ui_react_1.Grid.Column width={10}>
          <h3>
            SEGUIR <span>#ADOPTMECR</span>{' '}
          </h3>
          <div>
            <semantic_ui_react_1.Icon size='large' name='facebook'/>
            <semantic_ui_react_1.Icon size='large' name='instagram'/>
            <semantic_ui_react_1.Icon size='large' name='twitter'/>
          </div>
        </semantic_ui_react_1.Grid.Column>

        <semantic_ui_react_1.Grid.Column width={6}>
          <h3>NEWSLETTER</h3>
          <formik_1.Formik initialValues={initialValues} validationSchema={validationSchemas_1.newsLetterValidationSchema} onSubmit={(values, helpers) => {
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
    }}>
            {(props) => (<formik_1.Form className='ui form'>
                {props.errors.error && <ErrorLabel_1.ErrorLabel errorMessage={props.errors.error}/>}
                <TextInput_1.TextInput name='email' placeholder='EMAIL' value={props.values.email} onChange={props.handleChange} onBlur={props.handleBlur}/>
                <semantic_ui_react_1.Button loading={props.isSubmitting} 
    //disabled={!props.isValid || !props.dirty || props.isSubmitting}
    disabled={true} type='submit' fluid size='large' color='orange' content='SUBSCRIBIR'/>
              </formik_1.Form>)}
          </formik_1.Formik>
        </semantic_ui_react_1.Grid.Column>
      </semantic_ui_react_1.Grid>
      <react_scroll_1.Link to='nav' spy={true} smooth={true}>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'black',
    }}>
          <h4>VOLVER ARRIBA</h4>
          <semantic_ui_react_1.Icon name='arrow up'/>
        </div>
      </react_scroll_1.Link>
    </semantic_ui_react_1.Segment>);
};
exports.Footer = Footer;
