"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionDetailSidebar = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const react_scroll_1 = require("react-scroll");
const AdopcionDetailSidebar = ({ selectedPet }) => {
    return (<semantic_ui_react_1.Segment textAlign='center'>
      <semantic_ui_react_1.Button.Group vertical>
        <semantic_ui_react_1.Button style={{ marginBottom: '10px' }} as={react_scroll_1.Link} basic to='contact-form' spy={true} smooth={true} size='medium' color='orange' content={`PREGUNTAR ACERCA DE ${selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.name.toLocaleUpperCase()}`}/>
        {/* <Button style={{ marginBottom: '10px' }} basic size='medium' color='orange'>
          <Icon name='heart outline' /> AGREGAR A FAVORITOS
        </Button> */}
        <semantic_ui_react_1.Button basic color='orange' size='medium' animated='vertical'>
          <semantic_ui_react_1.Button.Content hidden content={<semantic_ui_react_1.Icon name='share'/>}/>
          <semantic_ui_react_1.Button.Content visible content='COMPARTIR'/>
        </semantic_ui_react_1.Button>
      </semantic_ui_react_1.Button.Group>
    </semantic_ui_react_1.Segment>);
};
exports.AdopcionDetailSidebar = AdopcionDetailSidebar;
