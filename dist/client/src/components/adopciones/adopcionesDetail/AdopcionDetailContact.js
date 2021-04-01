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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdopcionDetailContact = void 0;
const react_1 = __importStar(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const AdopcionDetailMessage_1 = require("./AdopcionDetailMessage");
const AdopcionDetailContact = ({ selectedPet, authenticated, }) => {
    return (<react_1.Fragment>
      <semantic_ui_react_1.Segment>
        <semantic_ui_react_1.Item.Group>
          <semantic_ui_react_1.Item>
            {(selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.photosUrl) && (<img style={{
        borderRadius: '50%',
        width: '120px',
        height: '120px',
        marginRight: '30px',
    }} src={selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.photosUrl[0]} alt='petPic'/>)}
            <semantic_ui_react_1.Item.Content style={{ marginTop: '20px' }}>
              <semantic_ui_react_1.Item.Header content={`Pregunta acerca de ${selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.name}`}/>
              <semantic_ui_react_1.Item.Description>
                {selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.breed}
                <br />
                {selectedPet === null || selectedPet === void 0 ? void 0 : selectedPet.description}
              </semantic_ui_react_1.Item.Description>
            </semantic_ui_react_1.Item.Content>
          </semantic_ui_react_1.Item>
        </semantic_ui_react_1.Item.Group>
      </semantic_ui_react_1.Segment>
      
      <AdopcionDetailMessage_1.AdopcionDetailMessage selectedPet={selectedPet}/>
    </react_1.Fragment>);
};
exports.AdopcionDetailContact = AdopcionDetailContact;