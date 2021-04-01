"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionDetailMessage = void 0;
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const semantic_ui_react_1 = require("semantic-ui-react");
const ContactForm_1 = require("./ContactForm");
const AdopcionDetailMessage = ({ selectedPet }) => {
    const { currentUser } = react_redux_1.useSelector((state) => state.auth);
    return (<semantic_ui_react_1.Grid style={{ marginTop: '10px' }} centered={currentUser ? false : true}>
      {currentUser && (<semantic_ui_react_1.Grid.Column width={7}>
          <h2 style={{ margin: 0 }}>Departe de:</h2>
          <h3 style={{ margin: 0 }}>
            {' '}
            <semantic_ui_react_1.Icon name='mail'/> {currentUser === null || currentUser === void 0 ? void 0 : currentUser.email}
          </h3>
          <p style={{ marginTop: '5px' }}>
            <semantic_ui_react_1.Icon name='user'/> {currentUser === null || currentUser === void 0 ? void 0 : currentUser.name} {currentUser === null || currentUser === void 0 ? void 0 : currentUser.lastName}
          </p>
        </semantic_ui_react_1.Grid.Column>)}
      <semantic_ui_react_1.Grid.Column width={9}>
        <span>SU MENSAJE DEBE TENER (5000 CARACTERES COMO MAXIMO)</span>
        <ul>
          <li>Puede agregar preguntas sobre la mascota</li>
          <li>Comentarios hacia el refugio/rescates</li>
        </ul>
        <ContactForm_1.ContactForm selectedPet={selectedPet} currentUser={currentUser}/>
      </semantic_ui_react_1.Grid.Column>
    </semantic_ui_react_1.Grid>);
};
exports.AdopcionDetailMessage = AdopcionDetailMessage;
