"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionDetailListItem = void 0;
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const react_router_dom_1 = require("react-router-dom");
const AdopcionDetailListItem = ({ selectedBreedPet, }) => {
    return (<semantic_ui_react_1.Card as={react_router_dom_1.Link} to={`/adoption/${selectedBreedPet === null || selectedBreedPet === void 0 ? void 0 : selectedBreedPet.id}`}>
      <semantic_ui_react_1.Image fluid src={selectedBreedPet.photosUrl
        ? selectedBreedPet === null || selectedBreedPet === void 0 ? void 0 : selectedBreedPet.photosUrl[0] : '/assets/pet-house.png'}/>
      <semantic_ui_react_1.Card.Content textAlign='center'>
        <semantic_ui_react_1.Card.Header>
          {' '}
          <p style={{ color: 'orange' }}>{selectedBreedPet === null || selectedBreedPet === void 0 ? void 0 : selectedBreedPet.name}</p>{' '}
        </semantic_ui_react_1.Card.Header>
        <semantic_ui_react_1.Card.Meta>
          <semantic_ui_react_1.Icon name='point'/> {selectedBreedPet === null || selectedBreedPet === void 0 ? void 0 : selectedBreedPet.location}
        </semantic_ui_react_1.Card.Meta>
        <semantic_ui_react_1.Card.Description>{selectedBreedPet === null || selectedBreedPet === void 0 ? void 0 : selectedBreedPet.description}</semantic_ui_react_1.Card.Description>
      </semantic_ui_react_1.Card.Content>
    </semantic_ui_react_1.Card>);
};
exports.AdopcionDetailListItem = AdopcionDetailListItem;
