"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionDetailInfo = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const AdopcionDetailInfo = ({ selectedPet }) => {
    return (<semantic_ui_react_1.Segment>
      <semantic_ui_react_1.Item.Group>
        <semantic_ui_react_1.Item.Content>
          <semantic_ui_react_1.Item.Header as='h1' content={selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.name}/>
          <semantic_ui_react_1.Divider />
          <semantic_ui_react_1.Item.Meta>
            <semantic_ui_react_1.Icon name='paw'/> {selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.breed}
            <br />
            <semantic_ui_react_1.Icon name='point'/>
            {selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.location}
          </semantic_ui_react_1.Item.Meta>
          <semantic_ui_react_1.Divider />
          <semantic_ui_react_1.Item.Header as='h3' content='Acerca'/>
          <semantic_ui_react_1.Item.Header as='h5' content='Caracteristicas'/>
          <semantic_ui_react_1.Item.Description>{selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.description}</semantic_ui_react_1.Item.Description>
        </semantic_ui_react_1.Item.Content>
      </semantic_ui_react_1.Item.Group>
    </semantic_ui_react_1.Segment>);
};
exports.AdopcionDetailInfo = AdopcionDetailInfo;
