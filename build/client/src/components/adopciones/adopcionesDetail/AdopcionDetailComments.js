"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionDetailComments = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const AdopcionDetailComments = ({ selectedPet, authenticated, }) => {
    return (<semantic_ui_react_1.Segment style={{ marginTop: '25px' }}>
      <semantic_ui_react_1.Comment.Group>
        <semantic_ui_react_1.Header as='h3' dividing>
          Comentarios acerca de {selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.name}
        </semantic_ui_react_1.Header>

        <semantic_ui_react_1.Comment>
          <semantic_ui_react_1.Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
          <semantic_ui_react_1.Comment.Content>
            <semantic_ui_react_1.Comment.Author as='a'>Elliot Fu</semantic_ui_react_1.Comment.Author>
            <semantic_ui_react_1.Comment.Metadata>
              <div>Yesterday at 12:30AM</div>
            </semantic_ui_react_1.Comment.Metadata>
            <semantic_ui_react_1.Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </semantic_ui_react_1.Comment.Text>
            <semantic_ui_react_1.Comment.Actions>
              <semantic_ui_react_1.Comment.Action>Reply</semantic_ui_react_1.Comment.Action>
            </semantic_ui_react_1.Comment.Actions>
          </semantic_ui_react_1.Comment.Content>
          <semantic_ui_react_1.Comment.Group>
            <semantic_ui_react_1.Comment>
              <semantic_ui_react_1.Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg'/>
              <semantic_ui_react_1.Comment.Content>
                <semantic_ui_react_1.Comment.Author as='a'>Jenny Hess</semantic_ui_react_1.Comment.Author>
                <semantic_ui_react_1.Comment.Metadata>
                  <div>Just now</div>
                </semantic_ui_react_1.Comment.Metadata>
                <semantic_ui_react_1.Comment.Text>Elliot you are always so right :)</semantic_ui_react_1.Comment.Text>
              </semantic_ui_react_1.Comment.Content>
            </semantic_ui_react_1.Comment>
          </semantic_ui_react_1.Comment.Group>
        </semantic_ui_react_1.Comment>

        {authenticated ? (<semantic_ui_react_1.Form reply>
            <semantic_ui_react_1.Form.TextArea />
            <semantic_ui_react_1.Button content='Add Reply' labelPosition='left' icon='edit' color='orange'/>
          </semantic_ui_react_1.Form>) : (<semantic_ui_react_1.Header color='orange' sub content='Debe iniciar sesion para comentar'/>)}
      </semantic_ui_react_1.Comment.Group>
    </semantic_ui_react_1.Segment>);
};
exports.AdopcionDetailComments = AdopcionDetailComments;
